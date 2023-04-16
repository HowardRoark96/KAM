import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';

export interface CommentDataInterface {
  author: Nullable<string>;
  avatar?: Nullable<string>;
  time: Nullable<string>;
  content?: Nullable<string>;
  likeCount?: Nullable<number>;
  dislikeCount?: Nullable<number>;
  liked?: Nullable<boolean>;
  disliked?: Nullable<boolean>;
  children?: Nullable<CommentDataInterface[]>;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input() comment: Nullable<CommentDataInterface>;
  @Input() likeIcon = 'like';
  @Input() dislikeIcon = 'dislike';
  @Output() valueChanged = new EventEmitter();

  like = () => {
    if (this.comment) {
      this.comment.liked = !this.comment.liked;

      if (this.comment.liked) {
        this.comment.likeCount = (this.comment.likeCount || 0) + 1;
        if (this.comment.disliked) {
          this.comment.disliked = false;
          this.comment.dislikeCount = (this.comment.dislikeCount || 1) - 1;
        }
      } else this.comment.likeCount = (this.comment.likeCount || 1) - 1;

      this.valueChanged.emit(this.comment);
    }
  };

  dislike = () => {
    if (this.comment) {
      this.comment.disliked = !this.comment.disliked;

      if (this.comment.disliked) {
        this.comment.dislikeCount = (this.comment.dislikeCount || 0) + 1;
        if (this.comment.liked) {
          this.comment.liked = false;
          this.comment.likeCount = (this.comment.likeCount || 1) - 1;
        }
      } else this.comment.dislikeCount = (this.comment.dislikeCount || 1) - 1;

      this.valueChanged.emit(this.comment);
    }
  };
}
