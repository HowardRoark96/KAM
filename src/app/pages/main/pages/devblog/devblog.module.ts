import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevblogComponent } from './devblog.component';
import { DevblogRoutingModule } from './devblog-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';
import { CommentModule } from '@widgets/comment';

@NgModule({
  imports: [CommonModule, DevblogRoutingModule, RequestWrapperModule, CommentModule],
  declarations: [DevblogComponent],
})
export class DevblogModule {}
