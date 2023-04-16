import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'executeWith' })
export class ExecuteWithPipe implements PipeTransform {
  /* eslint-disable */
  transform<T, G>(callback: (...args: any[]) => G, ...args: any[]): G {
    return callback?.(...args);
  }
  /* eslint-enable */
}
