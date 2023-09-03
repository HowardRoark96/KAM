import { SelectOption } from '../../interfaces/select-option';
import { Nullable } from '@customTypes/nullable.type';

export function createOptionsForLocalizedEnum<T extends string>(
  localizeMap: Map<T, string> | Partial<Record<T, Nullable<string>>>,
): SelectOption<{ value: T }>[] {
  const keyValuePairs =
    localizeMap instanceof Map ? Array.from(localizeMap) : Object.entries<Nullable<string>>(localizeMap);

  return keyValuePairs.map(([key, value]) => ({
    value: key as T,
    label: value || '',
  }));
}
