import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ButtonModule } from '@widgets/button';
import { CommentComponent } from './comment.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveTextareaModule } from '@widgets/reactive-fields/reactive-textarea';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

const NZ_MODULES = [NzCommentModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzGridModule, NzBadgeModule];

@NgModule({
  imports: [CommonModule, NZ_MODULES, ButtonModule, ReactiveTextareaModule, ExecuteWithModule],
  exports: [CommentComponent],
  declarations: [CommentComponent],
})
export class CommentModule {}
