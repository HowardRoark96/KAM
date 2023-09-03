import { SelectOption } from '../../interfaces/select-option';

export function createOptionsForBoolean(trueLabel: string, falseLabel: string): SelectOption[] {
  return [
    { value: false, label: falseLabel },
    { value: true, label: trueLabel },
  ];
}
