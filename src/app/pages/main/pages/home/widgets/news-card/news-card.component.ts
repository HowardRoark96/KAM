import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { CommentDataInterface } from '@widgets/comment';
import { formatDistanceToNowStrict } from 'date-fns';

export interface User {
  email: string;
  login: string;
  avatar: string;
}

export interface NewsDataInterface {
  title: Nullable<string>;
  time: Nullable<string>;
  contentTitle: Nullable<string>;
  contentDescription: Nullable<string>;
  user: Nullable<User>;
  comments: Nullable<CommentDataInterface[]>;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  @Input() news: Nullable<NewsDataInterface> = null;

  getTime = (value: string) => formatDistanceToNowStrict(new Date(value), { addSuffix: true });
}
