import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsCardModule } from './widgets/news-card';
import { CommentModule } from '@widgets/comment';
import { ButtonModule } from '@widgets/button';
import { ModalCreateNewsModule } from './widgets/modal-create-news';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NewsCardModule, CommentModule, ButtonModule, ModalCreateNewsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
