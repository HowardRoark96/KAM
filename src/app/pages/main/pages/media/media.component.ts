import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { getSelectMockedData } from '@utils/mocked-data/select.constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent {
  error_500$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 500 });
    return error;
  });

  form = new FormGroup({
    auto: new FormControl<Nullable<string>>(null, Validators.required),
  });

  SELECT_MOCKED_DATA = getSelectMockedData();

  getCars$ = () => {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.form.value).pipe(delay(3000));
  };
}
