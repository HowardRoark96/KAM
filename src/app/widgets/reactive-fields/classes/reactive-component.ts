import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types/size';
import { NzStatus } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form/form-label.component';
import { NzLabelAlignType } from 'ng-zorro-antd/form/form.directive';
import { DEFAULT_TOOLTIP_ICON, VALIDATION_ERRORS } from '@utils/constants/form.constant';

@Directive()
export abstract class ReactiveComponent implements OnChanges {
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
  @Input() noValidationMark: Nullable<boolean>;
  @Input() autocomplete: 'on' | 'off' = 'off';
  @Output() valueChange = new EventEmitter();

  private _noMarginBottom: Nullable<boolean> = true;
  @Input() set noMarginBottom(prop: unknown) {
    this._noMarginBottom = prop === '' || !!prop;
  }
  get noMarginBottom(): Nullable<boolean> {
    return this._noMarginBottom;
  }

  get hasRequiredValidator() {
    if (!this.control?.validator) return false;
    return this.control.validator({} as AbstractControl)?.required;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.control) return;

    if (('isDisabled' in changes || 'control' in changes) && typeof this.isDisabled === 'boolean') {
      const isDisabled = this.isDisabled || this.control.parent?.disabled;
      if (isDisabled && this.control.enabled) this.control.disable({ emitEvent: false, onlySelf: true });
      if (!isDisabled && this.control.disabled) this.control.enable({ emitEvent: false, onlySelf: true });
    }
  }

  getErrorMessage = (error: ValidationErrors | null) => {
    if (!error) return;

    const errorKey = Object.keys(error)[0];
    const validateFn = VALIDATION_ERRORS[errorKey];

    if (!validateFn) return 'Unhandled error';

    return validateFn(error[errorKey]);
  };
}
