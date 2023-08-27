import { Option } from '../../interfaces/select-option';

export function createOptionsForNullableBoolean(trueLabel: string, falseLabel: string, nullLabel: string): Option[] {
  return [
    { value: false, label: falseLabel },
    { value: true, label: trueLabel },
    { value: null, label: nullLabel },
  ];
}
