import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderError } from '@components/loader/utils/loader-error.interface';

@Component({
  selector: 'app-request-wrapper',
  templateUrl: 'request-wrapper.component.html',
  styleUrls: ['request-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestWrapperComponent<T = unknown> implements OnChanges {
  @Input() request$: Nullable<Observable<T>>;

  @Output() response = new EventEmitter<Nullable<T>>();

  data: Nullable<T>;

  hasFirstRs: Nullable<boolean>;

  isLoading: Nullable<boolean>;

  error: Nullable<LoaderError>;

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
