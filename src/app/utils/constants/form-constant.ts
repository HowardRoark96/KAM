import { NzFormTooltipIcon } from 'ng-zorro-antd/form/form-label.component';
import { ValidationErrors } from '@angular/forms';

export const PATTERN = {
  URL: /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i,
  EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const PATCH_OPTIONS = { emitEvent: false, onlySelf: true };
export const DEFAULT_TOOLTIP_ICON: NzFormTooltipIcon = { type: 'question-circle', theme: 'outline' };
export const ATTENTION_TOOLTIP_ICON: NzFormTooltipIcon = { type: 'info-circle', theme: 'outline' };
export const PATTERN_MESSAGE_MAP = {
  [PATTERN.URL.toString()]: 'The website URL is incorrect',
  [PATTERN.EMAIL.toString()]: 'The email is incorrect',
};
export const VALIDATION_ERRORS: { [key: string]: { (arg: ValidationErrors): string } | { (arg: string): string } } = {
  required: () => `The field is required`,
  minlength: (error: ValidationErrors) => `Enter a value of at least ${error.requiredLength} characters`,
  maxlength: (error: ValidationErrors) => `Enter a value of no more than ${error.requiredLength} characters`,
  min: (error: ValidationErrors) => `Enter a value of at least ${error.min}`,
  max: (error: ValidationErrors) => `Enter a value of no more than ${error.max}`,
  email: () => 'Please enter a valid email',
  pattern: (error: ValidationErrors) => PATTERN_MESSAGE_MAP[error.requiredPattern] || 'The field is incorrect',
  minWords: (error: ValidationErrors) => `The field must contain at least ${error.minWords} words`,
  maxWords: (error: ValidationErrors) => `The field must contain a maximum ${error.length} of word(s)`,
  dateMax: (error: ValidationErrors) => `Enter a date no later than ${error.max}`,
  customMessage: (message: string) => message,
  fraction: () => 'The field must contain only integer number',
};
export const GET_WORDS_COUNT = (value: string) => value.split(' ').filter(Boolean).length;
