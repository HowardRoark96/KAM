import { Nullable } from '@customTypes/nullable.type';
import { ModalModeType } from '@utils/types';

export interface ModalData<TData = unknown> {
  data?: Nullable<TData>;
  mode?: Nullable<ModalModeType>;
}
