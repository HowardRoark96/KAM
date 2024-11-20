import { Nullable } from '@customTypes/nullable.type';
import { DataFn } from '@widgets/grid/renders/utils';

export interface IconCellParams<TData = unknown> {
  icon?: Nullable<string>;
  iconTheme?: Nullable<'fill' | 'outline' | 'twotone'>;
  color?: Nullable<string>;
  twotoneColor?: Nullable<string>;
  class?: Nullable<string>;

  getIconCallback?: DataFn<TData, Nullable<string>>;
  getIconThemeCallback?: DataFn<TData, Nullable<'fill' | 'outline' | 'twotone'>>;
  getColorCallback?: DataFn<TData, Nullable<string>>;
  getTwotoneColorCallback?: DataFn<TData, Nullable<string>>;
}
