import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'executeWith' })
export class ExecuteWithPipe implements PipeTransform {
  transform<T>(callback: (...args: unknown[]) => T, ...args: unknown[]): T {
    return callback?.(...args);
  }
}
