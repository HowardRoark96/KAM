export interface OptionsConfig<T> {
  valuePath?: keyof T;
  valueCallback?: (option: T) => unknown;
  labelPath?: keyof T;
  labelCallback?: (option: T) => string;
  disabledCallback?: (value: T) => boolean;
}
