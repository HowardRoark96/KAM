import { ChangeDetectionStrategy, Component } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { getCommentMockedData } from '@utils/mocked-data';
import { MockedData } from '@utils/mocked-data/interfaces';
import { CommentDataInterface } from '@widgets/comment';

@Component({
  selector: 'app-devblog',
  templateUrl: './devblog.component.html',
  styleUrls: ['./devblog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevblogComponent {
  error_500$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 500 });
    return error;
  });

  MOCKED_DATA_COMMENT: MockedData<CommentDataInterface[]> = getCommentMockedData();

  MOCKED_DATA_COMMENT_EMPTY: MockedData<CommentDataInterface[]> = { data: [] };
}
