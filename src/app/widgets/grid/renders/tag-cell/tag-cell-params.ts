import { Nullable } from '@customTypes/nullable.type';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';

type DataFn<TData, TReturn> = (data: TData | undefined) => Nullable<TReturn>;

export interface TagCellParams<TData = unknown> {
  labelMap?: Nullable<Record<string, string>>;
  icon?: Nullable<string>;
  colorTagMap?: Record<string, string | NzStatusColor | NzPresetColor>;
  colorTag?: string | NzStatusColor | NzPresetColor;

  getLabelCallback?: DataFn<TData, Nullable<string>>;
  getColorTagCallback?: DataFn<TData, Nullable<string>>;
}
