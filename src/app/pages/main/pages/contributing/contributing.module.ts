import { NgModule } from '@angular/core';
import { ContributingComponent } from './contributing.component';
import { ContributingRoutingModule } from './contributing-routing.module';
import { RequestWrapperModule } from '@widgets/request-wrapper';

@NgModule({
  imports: [ContributingRoutingModule, RequestWrapperModule, RequestWrapperModule],
  declarations: [ContributingComponent],
})
export class ContributingModule {}
