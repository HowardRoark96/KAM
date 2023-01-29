import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POSTS_MOCK_DATA } from './utils/post.mock';
import { delay, map, of } from 'rxjs';
import { Post } from '@components/post';

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
}
