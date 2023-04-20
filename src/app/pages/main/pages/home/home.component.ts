import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POSTS_MOCK_DATA } from './utils/post.mock';
import { delay, map, of } from 'rxjs';
import { Post } from '@components/post';
import { getNewsMockedData } from '@utils/mocked-data/news.constant';
import { NewsDataInterface } from './widgets/news-card/news-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  posts = POSTS_MOCK_DATA;

  postsData$ = of(POSTS_MOCK_DATA).pipe(
    delay(3000),
    map((data) => data),
  );

  getPost = (post: unknown) => post as Post;

  MOCKED_DATA_NEWS: NewsDataInterface[] = getNewsMockedData().data;
}
