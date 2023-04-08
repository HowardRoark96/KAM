import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { FieldSizeL, FieldSizeM, FieldSizeS } from '../types/field-size.type';

@Component({
  selector: 'app-reactive-label',
  templateUrl: './reactive-label.component.html',
  styleUrls: ['./reactive-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveLabelComponent {
  @Input() label: Nullable<string>;

  @Input() hasRequiredValidator: Nullable<boolean>;

  @Input() isBold: Nullable<boolean>;

  @Input() hint: Nullable<string>;

  @Input() noBottomHint: Nullable<boolean> = false;

  @Input() hintPosition: 'top' | 'bottom' = 'top';

  @Input() hintStyle: { [prop: string]: unknown } | null = null;

  @HostBinding('attr.label-size')
  @Input()
  size: FieldSizeS | FieldSizeM | FieldSizeL = 's';
}
