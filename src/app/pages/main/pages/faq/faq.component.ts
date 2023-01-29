import { ChangeDetectionStrategy, Component } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  error_500$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 500 });
    return error;
  });
}
