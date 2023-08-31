import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { AppValidators } from '@validators/app-validators.class';
import { GET_WORDS_COUNT, PATTERN } from '@utils/constants/form.constant';
import { NotificationService } from '@services/notification';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl<Nullable<string>>(null, Validators.required),
    email: new FormControl<Nullable<string>>(null, [Validators.required, Validators.pattern(PATTERN.EMAIL)]),
    subject: new FormControl<Nullable<string>>(null, Validators.required),
    message: new FormControl<Nullable<string>>(null, [Validators.required, AppValidators.maxWords(500)]),
  });

  getWordsCount = GET_WORDS_COUNT;

  error_401$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 401 });
    return error;
  });

  constructor(private readonly notificationService: NotificationService) {}

  sendReport$ = () => {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.form.value).pipe(
      delay(3000),
      tap(this.notificationService.onSuccess('Your message sent successfully.')),
    );
  };

  cancelReport$ = () =>
    this.error_401$.pipe(tap(this.notificationService.onError({ content: 'Oops! Something went wrong.' })));
}
