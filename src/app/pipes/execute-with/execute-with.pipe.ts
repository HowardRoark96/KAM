import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'executeWith' })
export class ExecuteWithPipe implements PipeTransform {
  /* eslint-disable */
  transform<F extends (...fArgs: any[]) => any>(callback: F, ...args: Parameters<F>): ReturnType<F> {
    return callback?.(...args);
  }
  /* eslint-enable */
}
