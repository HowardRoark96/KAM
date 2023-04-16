import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { FormControl } from '@angular/forms';
import { COLORS } from '@utils/constants';

@Component({
  selector: 'app-reactive-error',
  templateUrl: './reactive-error.component.html',
  styleUrls: ['./reactive-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveErrorComponent {
  @Input() control: Nullable<FormControl<unknown>>;

  /* Show error message only in error's label. Has a higher priority than the `error` property */
  @Input() errorLabel?: Nullable<string>;

  /* Show error message in error's label and in error's tooltip. Specified when `ReactiveErrorComponent` used without
     passing the `control` property */
  @Input() error?: Nullable<string>;

  COLORS = COLORS;
}
