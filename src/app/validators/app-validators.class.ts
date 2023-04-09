import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static maxWords(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      if (!value) return null;
      const words = (value as string).split(' ').filter(Boolean);
      return words.length > max ? { maxWords: { max, actual: words.length } } : null;
    };
  }

  static minWords(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      if (!value) return null;
      const words = (value as string).split(' ').filter(Boolean);
      return words.length < min ? { minWords: { min, actual: words.length } } : null;
    };
  }
}
