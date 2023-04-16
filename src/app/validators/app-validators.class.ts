import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

interface PasswordValidatorConfig {
  upper: boolean;
  lower: boolean;
  number: boolean;
  maxLength: number;
  minLength: number;
}

const DEFAULT_PASSWORD_VALIDATOR_CONFIG: PasswordValidatorConfig = {
  upper: true,
  lower: true,
  number: true,
  maxLength: 50,
  minLength: 5,
};

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

  static password(config: PasswordValidatorConfig = DEFAULT_PASSWORD_VALIDATOR_CONFIG): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) return null;

      const upperCaseCharacters = /[A-Z]+/g;
      const lowerCaseCharacters = /[a-z]+/g;
      const numberCharacters = /[0-9]+/g;

      if (config.upper && !upperCaseCharacters.test(value))
        return { customMessage: 'Password must contain uppercase characters!' };

      if (config.lower && !lowerCaseCharacters.test(value))
        return { customMessage: 'Password must contain lowercase characters!' };

      if (config.number && !numberCharacters.test(value)) return { customMessage: 'Password must contain numbers!' };

      if (config?.maxLength && value.length > config?.maxLength)
        return { customMessage: `Password must contain at least ${config.maxLength} characters!` };

      if (config?.minLength && value.length < config?.minLength)
        return { customMessage: `Password must contain at least ${config.minLength} characters!` };

      return null;
    };
  }
}
