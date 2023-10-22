import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';

@Component({
  selector: 'app-personal-stats',
  templateUrl: 'personal-stats.component.html',
  styleUrls: ['personal-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalStatsComponent {
  @Input() games?: number;
  @Input() winRate?: number;
  @Input() rank?: number;
  @Input() lastGame?: string;

  readonly COLORS = COLORS;
  readonly PREFIX = 'PAGE.PROFILE.USER_STATS.';
}
