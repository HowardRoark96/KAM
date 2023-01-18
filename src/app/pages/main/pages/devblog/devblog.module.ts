import { NgModule } from '@angular/core';
import { DevblogComponent } from './devblog.component';
import { DevblogRoutingModule } from './devblog-routing.module';

@NgModule({
  imports: [DevblogRoutingModule],
  declarations: [DevblogComponent],
})
export class DevblogModule {}
