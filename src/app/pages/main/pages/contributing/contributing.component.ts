import { ChangeDetectionStrategy, Component } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contributing',
  templateUrl: './contributing.component.html',
  styleUrls: ['./contributing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributingComponent {
  error_500$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 500 });
    return error;
  });
}
