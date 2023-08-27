export interface OptionsConfig<T> {
  labelFn?: (option: T) => string;
  valueFn?: (option: T) => unknown;
  hideFn?: (option: T) => boolean;
  disableFn?: (option: T) => boolean;
  withChildren?: boolean;
}
