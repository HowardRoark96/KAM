import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsCardModule } from './widgets/news-card';
import { CommentModule } from '@widgets/comment';
import { ButtonModule } from '@widgets/button';
import { ModalCreateNewsModule } from './widgets/modal-create-news';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NewsCardModule,
    CommentModule,
    ButtonModule,
    ModalCreateNewsModule,
    RequestWrapperModule,
    ExecuteWithModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
