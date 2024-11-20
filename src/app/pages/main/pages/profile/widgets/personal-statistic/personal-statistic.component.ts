import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-personal-statistic',
  templateUrl: 'personal-statistic.component.html',
  styleUrls: ['personal-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzIconModule, NgIf],
  standalone: true,
})
export class PersonalStatisticComponent {
  @Input() data?: number | string;
  @Input() icon?: string;
  @Input() label?: string;

  readonly COLORS = COLORS;
}
