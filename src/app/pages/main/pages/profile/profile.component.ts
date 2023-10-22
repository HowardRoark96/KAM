import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';
import { UsersService } from '@api/services';
import { toNullableNumber } from '@utils/functions/to-nullable-number';
import { getRouteParams } from '@utils/functions/get-route-params';
import { getGameRatioChartOptions, getRankChartOptions } from './profile.utils';
import { map } from 'rxjs/operators';
import { Nullable } from '@customTypes/nullable.type';

const GET_DEFAULT_TO_DATE = () => new Date().toISOString();
const GET_DEFAULT_FROM_DATE = () => {
  const date = new Date(GET_DEFAULT_TO_DATE());
  date.setUTCDate(date.getUTCDate() - 7);
  return date.toISOString();
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly usersService = inject(UsersService);

  readonly userId = toNullableNumber(getRouteParams()['id']);
  readonly PREFIX = 'PAGE.PROFILE.USER_STATS.';
  readonly COLORS = COLORS;

  readonly getGameRatioChartOptions = getGameRatioChartOptions;
  readonly getRankChartOptions = getRankChartOptions;

  fromDate: Nullable<Date>;
  toDate: Nullable<Date>;

  getUserStatistic$ = this.usersService.getUserStatistic(this.userId!);
  getUserGameHistoryData$ = this.getUserGameHistory$(GET_DEFAULT_FROM_DATE(), GET_DEFAULT_TO_DATE());

  getUserGameHistory$(from: string, to: string) {
    return this.usersService.getUserGameHistory(this.userId!, from, to).pipe(map(({ data }) => data ?? []));
  }
}
