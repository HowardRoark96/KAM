import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';
import { UsersService } from '@api/services';
import { toNullableNumber } from '@utils/functions/to-nullable-number';
import { getRouteParams } from '@utils/functions/get-route-params';
import { getGameRatioChartOptions, getRankChartOptions } from './profile.utils';
import { map } from 'rxjs/operators';

const GET_DEFAULT_FROM_DATE = () => {
  const date = new Date(GET_DEFAULT_TO_DATE());
  date.setUTCDate(date.getUTCDate() - 100);
  return date;
};
const GET_DEFAULT_TO_DATE = () => new Date();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly usersService = inject(UsersService);

  readonly userId = toNullableNumber(getRouteParams()['id']);
  readonly COLORS = COLORS;

  readonly getGameRatioChartOptions = getGameRatioChartOptions;
  readonly getRankChartOptions = getRankChartOptions;

  fromDate = GET_DEFAULT_FROM_DATE();
  toDate = GET_DEFAULT_TO_DATE();

  getUserStatistic$ = this.usersService.getUserStatistic(this.userId!);
  getUserGameHistoryData$ = this.getUserGameHistory$(this.fromDate, this.toDate);

  getUserGameHistory$(from: Date, to: Date) {
    return this.usersService
      .getUserGameHistory(this.userId!, from.toISOString(), to.toISOString())
      .pipe(map(({ data }) => data ?? []));
  }
}
