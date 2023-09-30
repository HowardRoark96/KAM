import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  TemplateRef,
} from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';

export interface RequestError {
  status: number;
  message: string;
}

@Component({
  selector: 'app-request-wrapper',
  templateUrl: 'request-wrapper.component.html',
  styleUrls: ['request-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestWrapperComponent<T = unknown> implements OnChanges {
  @Input() label = 'Loading...';
  @Input() delay = 0;
  @Input() indicator: TemplateRef<NzSafeAny> | null = null;
  @Input() size: NzSizeLDSType = 'default';
  @Input() isSimple = false;
  @Input() request$: Nullable<Observable<T>>;

  @Output() response = new EventEmitter<Nullable<T>>();

  data: Nullable<T>;

  hasFirstRs: Nullable<boolean>;

  isLoading: Nullable<boolean>;

  error: Nullable<RequestError>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.request$ = this.getUpdatedRequest$(this.request$);
  }

  getUpdatedRequest$(request$: Nullable<Observable<T>>): Nullable<Observable<T>> {
    this.error = null;

    if (!request$) return null;

    this.isLoading = true;

    return request$.pipe(
      delay(0), // для корректной отработки синхронно эмитящих observable
      tap((data) => this.onDataTap(data)),
      catchError((err: HttpErrorResponse) => this.onCatchError(err)),
    );
  }

  retry = () => (this.request$ = this.getUpdatedRequest$(this.request$));

  private onDataTap(data: Nullable<T>) {
    this.data = data;
    this.response.emit(this.data);
    this.hasFirstRs = true;
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  private onCatchError(err: HttpErrorResponse) {
    this.isLoading = false;
    this.error = { status: err.status, message: err.message };
    this.cdr.markForCheck();
    return throwError(() => err);
  }
}
