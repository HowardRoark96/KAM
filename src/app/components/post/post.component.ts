import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Post {
  id: string;
  category: string;
  title: string;
  dateCreated: string;
  dateUpdated: string;
  createdBy: string;
  updatedBy: string;
  text: string;
  headerImg: string;
  commentCount: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post!: Post;

  showContent = false;

  isPostLiked = false;

  hideOrShowContent = () => (this.showContent = !this.showContent);

  likePost = () => (this.isPostLiked = !this.isPostLiked);
}
