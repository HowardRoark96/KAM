import { NzSelectOptionInterface } from 'ng-zorro-antd/select/select.types';
import { Observable } from 'rxjs';

export type SelectOption<T = unknown> = T & NzSelectOptionInterface;
export type SelectOptions<T = unknown> =
  | Observable<SelectOption<T>[]>
  | ((t: string) => Observable<SelectOption<T>[]>)
  | SelectOption<T>[];

export type SelectOptionsMap<T> = Map<NzSelectOptionInterface['value'], SelectOption<T>>;
