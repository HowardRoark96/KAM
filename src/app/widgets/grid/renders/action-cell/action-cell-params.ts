import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button/button.component';
import { Nullable } from '@customTypes/nullable.type';
import { LinkTarget } from '@utils/types';

type DataFn<TData, TReturn> = (data: TData | undefined) => Nullable<TReturn>;

export interface ActionCellParams<TData = unknown> {
  label?: Nullable<string>;
  type?: Nullable<NzButtonType>;
  btnClass?: Nullable<string | string[] | Set<string> | { [key: string]: unknown }>;
  size?: Nullable<NzButtonSize>;
  shape?: Nullable<NzButtonShape>;
  block?: Nullable<boolean>;
  danger?: Nullable<boolean>;
  isDisabled?: Nullable<boolean>;
  leftIcon?: Nullable<string>;
  rightIcon?: Nullable<string>;
  theme?: Nullable<'fill' | 'outline' | 'twotone'>;
  twotoneColor?: Nullable<string>;
  action$?: Nullable<() => Nullable<Observable<unknown> | void>>;
  linkTarget?: Nullable<LinkTarget>;
  link?: Nullable<Array<number | string | undefined> | string | null>;
  queryParams?: Nullable<Params>;
  fragment?: Nullable<string>;

  getLabelCallback?: DataFn<TData, Nullable<string>>;
  getTypeCallback?: DataFn<TData, Nullable<NzButtonType>>;
  getBtnClassCallback?: DataFn<TData, Nullable<string | string[] | Set<string> | { [key: string]: unknown }>>;
  getShapeCallback?: DataFn<TData, Nullable<NzButtonShape>>;
  getBlockCallback?: DataFn<TData, boolean>;
  getDangerCallback?: DataFn<TData, Nullable<boolean>>;
  getIsDisabledCallback$?: DataFn<TData, Observable<boolean> | Nullable<boolean>>;
  getLeftIconCallback?: DataFn<TData, Nullable<string>>;
  getRightIconCallback?: DataFn<TData, Nullable<string>>;
  getThemeCallback?: DataFn<TData, Nullable<'fill' | 'outline' | 'twotone'>>;
  getTwotoneColorCallback?: DataFn<TData, Nullable<string>>;
  getActionCallback$?: DataFn<TData, Nullable<() => Nullable<Observable<unknown> | void>>>;
  getLinkTargetCallback?: DataFn<TData, Nullable<LinkTarget>>;
  getLinkCallback?: DataFn<TData, Nullable<Array<number | string | undefined> | string | null>>;
  getQueryParamsCallback?: DataFn<TData, Params>;
  getFragmentCallback?: DataFn<TData, Nullable<string>>;
}
