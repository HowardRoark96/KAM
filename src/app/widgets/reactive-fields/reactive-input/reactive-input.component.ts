import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveComponent } from '../classes';
import { ControlContainer, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { VALIDATION_ERRORS } from '@utils/constants';

@Component({
  selector: 'app-reactive-input[control]',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveInputComponent extends ReactiveComponent {
  getErrorMessage = (error: ValidationErrors | null) => {
    if (!error) return;

    const errorKey = Object.keys(error)[0];
    const validateFn = VALIDATION_ERRORS[errorKey];

    if (!validateFn) return 'Unhandled error';

    return validateFn(error[errorKey]);
  };
}
