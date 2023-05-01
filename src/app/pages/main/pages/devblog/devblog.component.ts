import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  MOCKED_DATA_COMMENT: MockedData<CommentDataInterface[]> = getCommentMockedData();

  MOCKED_DATA_COMMENT_EMPTY: MockedData<CommentDataInterface[]> = { data: [] };
}
