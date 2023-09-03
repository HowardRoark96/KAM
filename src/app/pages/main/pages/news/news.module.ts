import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsCardModule } from './widgets/news-card';
import { CommentModule } from '@widgets/comment';
import { ButtonModule } from '@widgets/button';
import { ModalCreateNewsModule } from './widgets/modal-create-news';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    NewsCardModule,
    CommentModule,
    ButtonModule,
    ModalCreateNewsModule,
    RequestWrapperModule,
    ExecuteWithModule,
  ],
  declarations: [NewsComponent],
})
export class NewsModule {}
