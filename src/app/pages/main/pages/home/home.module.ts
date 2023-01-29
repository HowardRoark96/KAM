import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostModule } from '@components/post';
import { RequestWrapperModule } from '@components/request-wrapper';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [HomeRoutingModule, PostModule, NgForOf, RequestWrapperModule, ExecuteWithModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
