import isNil from 'lodash-es/isNil';
import { Nullable } from '@customTypes/nullable.type';
import { Option } from '../../interfaces/select-option';
import { OptionsConfig } from './utils';

export const beToFeOption = <T extends { id?: Nullable<number>; name?: Nullable<string> }>(
  option: Nullable<T>,
  params?: OptionsConfig<T>,
  level = 0,
) => {
  if (!option) return;

  return <Option<T>>{
    ...option,
    value: (params?.valueFn || ((item) => item['id']))(option),
    label: (params?.labelFn || ((item) => item['name']))(option),
    hide: params?.hideFn?.(option),
    disabled: params?.disableFn?.(option),
    paddingLeftPx: level * 12,
  };
};

export const beToFeOptions = <T extends { id?: Nullable<number>; name?: Nullable<string> }>(
  options: T[],
  params?: OptionsConfig<T>,
): Option<T>[] => {
  if (!options) return options as Option<T>[];
  const returnOptions: Option<T>[] = [];
  const addOption = (option: Nullable<T>, level = 0) => {
    const mappedOption = beToFeOption(option, params, level);

    if (mappedOption) returnOptions.push(mappedOption);
    if (!params?.withChildren) return;

    const { children } = <T & { children: T[] }>option;
    if (!children) return;
    level = level + 1;
    children.forEach((o) => addOption(o, level));
  };

  options.forEach((o) => addOption(o));

  return returnOptions.filter((o) => o && !isNil(o?.value));
};
