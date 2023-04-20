import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostModule } from '@components/post';
import { RequestWrapperModule } from '@components/request-wrapper';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NewsCardModule } from './widgets/news-card';
import { CommentModule } from '@widgets/comment';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostModule,
    RequestWrapperModule,
    ExecuteWithModule,
    NewsCardModule,
    CommentModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
