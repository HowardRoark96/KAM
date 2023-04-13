import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, of, tap } from 'rxjs';
import { NotificationService } from '@services/notification';
import { formatDistance } from 'date-fns';

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
  @Input() commentData: Nullable<CommentDataInterface[]>;
  @Input() likeIcon = 'like';
  @Input() dislikeIcon = 'dislike';
  @Output() valueChanged = new EventEmitter();

  replyForm = new FormGroup({
    content: new FormControl<Nullable<string>>(null, Validators.required),
  });

  indexOfReplyFormShown: Nullable<number>;

  currentUser = {
    name: 'Developer',
    avatar: 'https://images.assetsdelivery.com/compings_v2/tratong/tratong1611/tratong161100154.jpg',
  };

  constructor(private readonly notificationService: NotificationService) {}

  showReplyForm = (index: number) => this.indexOfReplyFormShown === index;

  like = (comment: Nullable<CommentDataInterface>) => {
    if (comment) {
      comment.liked = !comment.liked;

      if (comment.liked) {
        comment.likeCount = (comment.likeCount || 0) + 1;
        if (comment.disliked) {
          comment.disliked = false;
          comment.dislikeCount = (comment.dislikeCount || 1) - 1;
        }
      } else comment.likeCount = (comment.likeCount || 1) - 1;

      this.valueChanged.emit(comment);
    }
  };

  dislike = (comment: Nullable<CommentDataInterface>) => {
    if (comment) {
      comment.disliked = !comment.disliked;

      if (comment.disliked) {
        comment.dislikeCount = (comment.dislikeCount || 0) + 1;
        if (comment.liked) {
          comment.liked = false;
          comment.likeCount = (comment.likeCount || 1) - 1;
        }
      } else comment.dislikeCount = (comment.dislikeCount || 1) - 1;

      this.valueChanged.emit(comment);
    }
  };

  replyTo = (index: number) => {
    if (this.indexOfReplyFormShown === index) return this.cancelComment();
    this.indexOfReplyFormShown = index;
  };

  cancelComment = () => {
    this.indexOfReplyFormShown = null;
    this.replyForm.reset();
  };

  sendComment$ = (parentComment: Nullable<CommentDataInterface>) => () => {
    if (!parentComment) return;
    if (this.replyForm.invalid)
      return Object.values(this.replyForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    const data: CommentDataInterface = {
      author: this.currentUser.name,
      avatar: this.currentUser.avatar,
      time: formatDistance(new Date(), new Date()),
      content: this.replyForm.value.content,
      likeCount: 0,
      dislikeCount: 0,
      liked: false,
      disliked: false,
      children: [],
    };

    return of(this.replyForm.value).pipe(
      delay(350),
      tap(() => (this.indexOfReplyFormShown = null)),
      tap(() => this.replyForm.reset()),
      tap(() => (parentComment.children ? parentComment.children.push(data) : (parentComment.children = [data]))),
      tap(this.notificationService.onSuccess({ content: 'Comment sent successfully.' })),
      tap(this.notificationService.onError()),
    );
  };
}
