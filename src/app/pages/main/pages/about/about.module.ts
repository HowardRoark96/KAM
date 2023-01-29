import { NgModule } from '@angular/core';
import { RequestWrapperModule } from '@components/request-wrapper';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [AboutRoutingModule, RequestWrapperModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
