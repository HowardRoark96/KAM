import { Nullable } from '@customTypes/nullable.type';

export type DataFn<TData, TReturn> = (data: TData | undefined) => Nullable<TReturn>;
