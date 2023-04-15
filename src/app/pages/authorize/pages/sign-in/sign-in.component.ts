import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { delay, of } from 'rxjs';
import { AppValidators } from '@validators/app-validators.class';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  form = new FormGroup({
    login: new FormControl<Nullable<string>>(null, [Validators.required, Validators.email]),
    password: new FormControl<Nullable<string>>(null, [Validators.required, AppValidators.password()]),
    rememberPassword: new FormControl<Nullable<boolean>>(null),
  });

  carouselImages = ['assets/img/swordsman_run.gif', 'assets/img/crossbowman_walk.gif'];

  signIn$ = () => {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.form.value).pipe(
      delay(3000),
      // tap(this.notificationService.onSuccess({ content: 'Your message sent successfully.' })),
    );
  };
}
