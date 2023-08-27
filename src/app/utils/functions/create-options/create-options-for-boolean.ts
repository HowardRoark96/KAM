import { Option } from '../../interfaces/select-option';

export function createOptionsForBoolean(trueLabel: string, falseLabel: string): Option[] {
  return [
    { value: false, label: falseLabel },
    { value: true, label: trueLabel },
  ];
}
