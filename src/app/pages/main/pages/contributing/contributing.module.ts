import { NgModule } from '@angular/core';
import { ContributingComponent } from './contributing.component';
import { ContributingRoutingModule } from './contributing-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [ContributingRoutingModule, RequestWrapperModule],
  declarations: [ContributingComponent],
})
export class ContributingModule {}
