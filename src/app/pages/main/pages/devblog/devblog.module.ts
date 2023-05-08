import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevblogComponent } from './devblog.component';
import { DevblogRoutingModule } from './devblog-routing.module';
import { CommentModule } from '@widgets/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [CommonModule, DevblogRoutingModule, CommentModule, NzDividerModule],
  declarations: [DevblogComponent],
})
export class DevblogModule {}
