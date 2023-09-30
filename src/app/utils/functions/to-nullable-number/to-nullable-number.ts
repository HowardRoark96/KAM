import isNil from 'lodash-es/isNil';
import { Nullable } from '@customTypes/nullable.type';

export function toNullableNumber(param: Nullable<string>): Nullable<number> {
  return !isNil(param) && isFinite(+param) ? +param : undefined;
}
