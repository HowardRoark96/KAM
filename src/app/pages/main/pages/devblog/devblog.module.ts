import { NgModule } from '@angular/core';
import { DevblogComponent } from './devblog.component';
import { DevblogRoutingModule } from './devblog-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [DevblogRoutingModule, RequestWrapperModule],
  declarations: [DevblogComponent],
})
export class DevblogModule {}
