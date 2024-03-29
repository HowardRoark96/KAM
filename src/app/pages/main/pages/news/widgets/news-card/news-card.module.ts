import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@widgets/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { CommentModule } from '@widgets/comment';
import { NewsCardComponent } from './news-card.component';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [CommonModule, CardModule, NzAvatarModule, CommentModule, ExecuteWithModule],
  exports: [NewsCardComponent],
  declarations: [NewsCardComponent],
})
export class NewsCardModule {}
