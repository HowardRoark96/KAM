import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { getWidthColDef } from '@widgets/grid/utils';
import { getActionCellDef } from '@widgets/grid/renders/action-cell';
import { RoleDto, UserDto } from '@api/model';
import { COLORS } from '@utils/constants/color.constant';
import { UsersService } from '@api/services';
import { getTagCellDef } from '@widgets/grid/renders/tag-cell';
import { ROLE_TYPE_COLOR_TAG_MAP } from '../roles';
import { getCountryCellDef } from '@widgets/grid/renders/country-cell';

const GRID_OPTIONS = (context: UsersComponent): AppGridOptions<UserDto> => ({
  context,
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'username',
      headerName: 'User name',
      initialPinned: 'left',
      lockPinned: true,
      ...getWidthColDef(200, 200),
    },
    { field: 'name', headerName: 'Name', ...getWidthColDef(200, 200) },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'roles',
      headerName: 'Roles',
      flex: 1,
      ...getTagCellDef<RoleDto>({
        colorTagMap: ROLE_TYPE_COLOR_TAG_MAP,
        getLabelCallback: (data) => data?.name,
        getColorTagCallback: (data) => data?.type,
      }),
    },
    {
      field: 'country',
      headerName: 'Country',
      headerClass: 'text-center',
      cellClass: 'text-center',
      ...getWidthColDef(110, 110, 110),
      ...getCountryCellDef<UserDto>({
        getShowCountryCallback: (data) => !data?.isSystemRole,
      }),
    },
    {
      field: 'registrationDate',
      headerName: 'Registration date',
      ...getWidthColDef(200, 200),
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<UserDto>({
        leftIcon: 'edit',
        theme: 'twotone',
        getActionCallback$: () => context.getEditUserCallback$(),
      }),
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<UserDto>({
        leftIcon: 'delete',
        theme: 'twotone',
        twotoneColor: COLORS.RED_3,
        getActionCallback$: () => context.getDeleteUserCallback$(),
        getIsDisabledCallback$: (data) => data?.isSystemRole,
      }),
    },
  ],
});

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  readonly PREFIX = 'PAGE.ADMINISTRATION.USERS';

  readonly usersService = inject(UsersService);

  gridOptions = GRID_OPTIONS(this);

  getData$: GridGetDataCallback<UserDto, 'id' | 'code' | 'description'> = (pagination) =>
    this.usersService.getUsersList(pagination.page, pagination.perPage);

  getEditUserCallback$ = () => () => {};

  getDeleteUserCallback$ = () => () => {};
}
