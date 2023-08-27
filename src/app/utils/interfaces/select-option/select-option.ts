import { NzSelectOptionInterface } from 'ng-zorro-antd/select/select.types';

export type Option<T = object> = T & {
  paddingLeftPx?: number;
  [key: string | number]: unknown;
} & NzSelectOptionInterface;
