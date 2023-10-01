import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';
import { UsersService } from '@api/services';
import { toNullableNumber } from '@utils/functions/to-nullable-number';
import { getRouteParams } from '@utils/functions/get-route-params';

@Component({
  selector: 'app-personal-stats',
  templateUrl: 'personal-stats.component.html',
  styleUrls: ['personal-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalStatsComponent {
  readonly usersService = inject(UsersService);

  readonly userId = toNullableNumber(getRouteParams()['id']);
  readonly COLORS = COLORS;
  readonly PREFIX = 'PAGE.PROFILE.USER_STATS.';

  getUserStatistic$ = this.usersService.getUserStatistic(this.userId!);
}
