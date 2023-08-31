import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { delay, of, tap } from 'rxjs';
import { NotificationService } from '@services/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverAccountComponent {
  form = new FormGroup({
    login: new FormControl<Nullable<string>>(null, [Validators.required, Validators.email]),
  });

  carouselImages = ['assets/img/spearman_attack.gif', 'assets/img/spearman_walk.gif'];

  constructor(private readonly notificationService: NotificationService, private readonly router: Router) {}

  recover$ = () => {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.form.value).pipe(
      delay(3000),
      tap(this.notificationService.onSuccess('Email has been sent to you to recover your account.')),
      tap(
        this.notificationService.onError({
          content: 'The user was not found. Check the correctness of the entered data or contact support.',
        }),
      ),
      tap(() => this.router.navigate(['authorize/sign-in'])),
    );
  };
}
