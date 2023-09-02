import { Nullable } from '@customTypes/nullable.type';

type DataFn<TData, TReturn> = (data: TData | undefined) => Nullable<TReturn>;

export interface CountryCellParams<TData = unknown> {
  getShowCountryCallback?: DataFn<TData, Nullable<boolean>>;
}
