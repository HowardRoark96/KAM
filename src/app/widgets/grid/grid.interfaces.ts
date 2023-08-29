import { Observable } from 'rxjs';
import { GridOptions as GlobalGridOptions, ColDef } from 'ag-grid-community';
import { ColGroupDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { Nullable } from '@customTypes/nullable.type';

/**
 * Access to all object's properties by flatten key `data.object.key`
 */
type FlatKeysObjDepthLimit = 8;
type FlatKeysObj<
  TData,
  TUpperKey = unknown,
  TProtection extends Array<unknown> = [],
> = TProtection['length'] extends FlatKeysObjDepthLimit
  ? never
  : {
      [TDataKey in keyof TData]-?: NonNullable<TData[TDataKey]> extends object
        ?
            | (
                | FlatKeysObj<
                    Required<TData[TDataKey]>,
                    TUpperKey extends string ? `${TUpperKey}.${TDataKey & string}` : TDataKey,
                    [...TProtection, 1]
                  >
                | `${TUpperKey extends string ? `${TUpperKey}.` : ''}${TDataKey & string}`
              )
            | `${TUpperKey extends string ? `${TUpperKey}.` : ''}${TDataKey & string}.length`
        : NonNullable<TData[TDataKey]> extends { length: unknown }
        ?
            | `${TUpperKey extends string ? `${TUpperKey}.` : ''}${TDataKey & string}`
            | `${TUpperKey extends string ? `${TUpperKey}.` : ''}${TDataKey & string}.length`
        : `${TUpperKey extends string ? `${TUpperKey}.` : ''}${TDataKey & string}`;
    }[keyof TData];

/**
 * Get type by flatten key
 */
export type AppGridColDef<TData = unknown> = Omit<ColDef<TData>, 'colId' | 'field'> & {
  colId?: string;
  // If TData is `unknown`, then disable typing and require a `string` type
  field?: TData extends object ? FlatKeysObj<Required<TData>> : string;
};

/**
 * `any` for default value of Input, otherwise will throw error - `unknown type is unacceptable`,
 * and AppGridOptions<unknown> couldn't be equal App GridOptions<DTO>
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AppGridOptions<TData = any> extends Omit<GlobalGridOptions<TData>, 'columnDefs'> {
  columnTypes?: {
    [key: string]: AppGridColDef<TData>;
  };
  columnDefs: (AppGridColDef<TData> | ColGroupDef<TData>)[] | null;
}

export enum OrderByOptions {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface PageInfo {
  page?: number;
  perPage?: number;
  pages?: number;
  items?: number;
}

export interface GridPagination {
  page: number;
  perPage: number;
}

export interface GridOrder<TModelFields = string> {
  orderBy: OrderByOptions;
  fieldBy: TModelFields;
}

export interface PaginatedResult<T> {
  data?: Nullable<T[]>;
  page?: PageInfo;
}

export type GridGetDataCallback<TModel = unknown, TModelFields = string> = (
  pagination: GridPagination,
  order?: GridOrder<TModelFields>,
) => Observable<Nullable<PaginatedResult<TModel> | TModel[]>>;

export type RowDataSource<TModel = unknown, TModelFields = unknown> =
  | GridGetDataCallback<TModel, TModelFields>
  | Observable<Nullable<PaginatedResult<TModel> | TModel[]>>
  | PaginatedResult<TModel>
  | TModel[];
