import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { ReactiveComponent } from '../classes';
import { VALIDATION_ERRORS } from '@utils/constants';
import { Nullable } from '@customTypes/nullable.type';

@Component({
  selector: 'app-reactive-textarea[control]',
  templateUrl: './reactive-textarea.component.html',
  styleUrls: ['./reactive-textarea.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTextareaComponent extends ReactiveComponent {
  @Input() maxCharacterCount: Nullable<number>;

  @Input() computeCharacterCount: (v: string) => number = (v) => v.length;

  @Input() rows = 1;

  @Input() minRows?: number;

  @Input() maxRows?: number;

  getErrorMessage = (error: ValidationErrors | null) => {
    if (!error) return;

    const errorKey = Object.keys(error)[0];
    const validateFn = VALIDATION_ERRORS[errorKey];

    if (!validateFn) return 'Unhandled error';

    return validateFn(error[errorKey]);
  };
}
