import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostModule } from '@components/post';

@NgModule({
  imports: [HomeRoutingModule, PostModule, NgForOf],
  declarations: [HomeComponent],
})
export class HomeModule {}
