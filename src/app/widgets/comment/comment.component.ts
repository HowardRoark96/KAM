import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, of, tap } from 'rxjs';
import { NotificationService } from '@services/notification';

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

  replyForm = new FormGroup({
    content: new FormControl<Nullable<string>>(null, Validators.required),
  });

  showReplyForm = false;

  currentUser = {
    name: 'Developer',
    avatar: 'https://images.assetsdelivery.com/compings_v2/tratong/tratong1611/tratong161100154.jpg',
  };

  constructor(private readonly notificationService: NotificationService) {}

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

  replyTo = () => {
    this.showReplyForm = !this.showReplyForm;
    if (this.showReplyForm) return;
    this.replyForm.reset();
  };

  cancelComment = () => {
    this.showReplyForm = !this.showReplyForm;
    this.replyForm.reset();
  };

  sendComment$ = () => {
    if (this.replyForm.invalid)
      return Object.values(this.replyForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.replyForm.value).pipe(
      delay(3000),
      tap(() => (this.showReplyForm = false)),
      tap(this.notificationService.onSuccess({ content: 'Comment sent successfully.' })),
      tap(this.notificationService.onError()),
    );
  };
}
