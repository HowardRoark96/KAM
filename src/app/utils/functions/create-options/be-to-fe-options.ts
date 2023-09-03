import { Nullable } from '@customTypes/nullable.type';
import { SelectOption } from '../../interfaces/select-option';
import { OptionsConfig } from './utils';
import get from 'lodash-es/get';

export function beToFeOptions<T extends { id?: Nullable<number>; name?: Nullable<string> }>(
  options: Nullable<T[]>,
): SelectOption<T>[];
export function beToFeOptions<T extends object>(options: Nullable<T[]>, config: OptionsConfig<T>): SelectOption<T>[];
export function beToFeOptions<T extends object>(options: Nullable<T[]>, config?: OptionsConfig<T>): SelectOption<T>[] {
  return (
    options?.map((o) => {
      const label: string = config?.labelCallback ? config.labelCallback(o) : get(o, config?.labelPath ?? 'name') ?? '';
      const value = config?.valueCallback ? config.valueCallback(o) : get(o, config?.valuePath ?? 'id');

      return {
        value,
        label,
        ...o,
        disabled: config?.disabledCallback ? config?.disabledCallback(o) : false,
      };
    }) || []
  );
}
