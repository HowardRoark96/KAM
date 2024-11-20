import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppGridOptions, GridGetDataCallback, GridModule } from '@widgets/grid';
import { UserGameShortDto } from '@api/model';
import { dateCellDef, getWidthColDef } from '@widgets/grid/utils';
import { UsersService } from '@api/services';
import { toNullableNumber } from '@utils/functions/to-nullable-number';
import { getRouteParams } from '@utils/functions/get-route-params';
import { getRankCellDef } from '@widgets/grid/renders/rank-cell';
import { secondsToTime } from '@utils/functions/seconds-to-time';
import { getActionCellDef } from '@widgets/grid/renders/action-cell';
import { getIconCellDef } from '@widgets/grid/renders/icon-cell';
import { COLORS } from '@utils/constants/color.constant';
import isNil from 'lodash-es/isNil';

const GRID_OPTIONS = (context: GameHistoryComponent): AppGridOptions<UserGameShortDto> => ({
  context,
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'rankChange',
      headerName: 'Rank Change',
      headerClass: 'text-center',
      cellClass: 'text-center',
      initialPinned: 'left',
      lockPinned: true,
      ...getWidthColDef(150, 150),
      ...getRankCellDef(),
    },
    { field: 'map', headerName: 'Map', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1, ...dateCellDef },
    {
      field: 'playingTime',
      headerName: 'Playing Time',
      flex: 1,
      valueFormatter: ({ value }) => secondsToTime(value).toString(),
    },
    {
      field: 'isApproved',
      headerName: 'Approved',
      headerClass: 'text-center',
      cellClass: 'text-center',
      ...getWidthColDef(125, 125),
      ...getIconCellDef({
        iconTheme: 'twotone',
        class: 'font-size-24',
        getIconCallback: (data) =>
          isNil(data?.isApproved) ? 'exclamation-circle' : data?.isApproved ? 'check-circle' : 'close-circle',
        getTwotoneColorCallback: (data) =>
          isNil(data?.isApproved) ? COLORS.ORANGE_3 : data?.isApproved ? COLORS.GREEN_3 : COLORS.RED_3,
      }),
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<UserGameShortDto>({
        label: 'More details',
        getActionCallback$: () => context.getGameDetailsCallback$(),
      }),
    },
  ],
});

@Component({
  selector: 'app-game-history',
  templateUrl: 'game-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [GridModule],
})
export class GameHistoryComponent {
  readonly usersService = inject(UsersService);

  readonly userId = toNullableNumber(getRouteParams()['id']);

  gridOptions = GRID_OPTIONS(this);

  getData$: GridGetDataCallback<UserGameShortDto, UserGameShortDto> = (pagination) =>
    this.usersService.getUserGameHistoryList(this.userId!, pagination.page, pagination.perPage);

  getGameDetailsCallback$ = () => () => {};
}
