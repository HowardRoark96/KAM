import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ButtonModule } from '@widgets/button';
import { CommentComponent } from './comment.component';

@NgModule({
  imports: [CommonModule, NzCommentModule, NzToolTipModule, NzIconModule, ButtonModule, NzAvatarModule],
  exports: [CommentComponent],
  declarations: [CommentComponent],
})
export class CommentModule {}
