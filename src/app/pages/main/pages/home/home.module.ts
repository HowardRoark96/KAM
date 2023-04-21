import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsCardModule } from './widgets/news-card';
import { CommentModule } from '@widgets/comment';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NewsCardModule, CommentModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
