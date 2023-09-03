import { SelectOption } from '../../interfaces/select-option';

export function createOptionsForNullableBoolean(
  trueLabel: string,
  falseLabel: string,
  nullLabel: string,
): SelectOption[] {
  return [
    { value: false, label: falseLabel },
    { value: true, label: trueLabel },
    { value: null, label: nullLabel },
  ];
}
