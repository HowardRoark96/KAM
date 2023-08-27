import { Nullable } from '@customTypes/nullable.type';
import { Option } from '../../interfaces/select-option';

export function createOptionsForLocalizedEnum<T extends string>(
  localizeMap: Map<T, string> | Partial<Record<T, Nullable<string>>>,
): Option<{ value: T; label: string }>[] {
  const keyValuePairs =
    localizeMap instanceof Map ? Array.from(localizeMap) : Object.entries<Nullable<string>>(localizeMap);

  return keyValuePairs.map(([key, value]) => ({
    value: key as T,
    label: value || '',
  }));
}
