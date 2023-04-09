import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types/size';
import { NzStatus } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form/form-label.component';
import { NzLabelAlignType } from 'ng-zorro-antd/form/form.directive';
import { DEFAULT_TOOLTIP_ICON, VALIDATION_ERRORS } from '@utils/constants';

@Directive()
export abstract class ReactiveComponent {
  @Input() control!: FormControl<unknown>;

  @Input() fieldId!: string;

  @Input() textBefore: string | TemplateRef<void> = '';

  @Input() textAfter: string | TemplateRef<void> = '';

  @Input() prefix: string | TemplateRef<void> = '';

  @Input() prefixIcon: Nullable<string>;

  @Input() suffix: string | TemplateRef<void> = '';

  @Input() suffixIcon: Nullable<string>;

  @Input() status: NzStatus = '';

  @Input() label: Nullable<string>;

  @Input() tooltipTitle: string | TemplateRef<void> = '';

  @Input() tooltipIcon: string | NzFormTooltipIcon = DEFAULT_TOOLTIP_ICON;

  @Input() labelAlign: NzLabelAlignType = 'left';

  @Input() noColon = false;

  @Input() labelSpan: string | number | null = null;

  @Input() fieldSpan: string | number | null = null;

  @Input() placeholder = '';

  @Input() fieldSize: NzSizeLDSType = 'default';

  @Input() isDisabled: Nullable<boolean>;

  @Input() autocomplete: 'on' | 'off' = 'off';

  @Output() valueChange = new EventEmitter();

  get hasRequiredValidator() {
    if (!this.control?.validator) return false;
    return this.control.validator({} as AbstractControl)?.required;
  }

  getErrorMessage = (error: ValidationErrors | null) => {
    if (!error) return;

    const errorKey = Object.keys(error)[0];
    const validateFn = VALIDATION_ERRORS[errorKey];

    if (!validateFn) return 'Unhandled error';

    return validateFn(error[errorKey]);
  };
}
