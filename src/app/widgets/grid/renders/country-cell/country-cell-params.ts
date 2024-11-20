import { Nullable } from '@customTypes/nullable.type';
import { DataFn } from '../utils';

export interface CountryCellParams<TData = unknown> {
  getShowCountryCallback?: DataFn<TData, Nullable<boolean>>;
}
