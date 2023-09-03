import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzNotificationDataOptions } from 'ng-zorro-antd/notification/typings';
import { Observer } from 'rxjs';

export interface NotificationParams {
  title?: string;
  content?: string;
  options?: NzNotificationDataOptions;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private readonly notificationService: NzNotificationService) {}

  success(params?: NotificationParams) {
    return this.notificationService.success(params?.title || 'Success', params?.content || 'Success', params?.options);
  }

  blank(params?: NotificationParams) {
    return this.notificationService.blank(params?.title || 'Blank', params?.content || 'Blank', params?.options);
  }

  warning(params?: NotificationParams) {
    return this.notificationService.warning(params?.title || 'Warning', params?.content || 'Warning', params?.options);
  }

  error(params?: NotificationParams) {
    return this.notificationService.error(params?.title || 'Error', params?.content || 'Error', params?.options);
  }

  onSuccessWithOptions<T>(params?: NotificationParams): Partial<Observer<T>> {
    return { next: () => this.success(params) };
  }

  onSuccess = <T>(content?: string): Partial<Observer<T>> => ({
    next: () => this.success({ content }),
  });

  onError = <T>(params?: NotificationParams): Partial<Observer<T>> => ({ error: () => this.error(params) });
}
