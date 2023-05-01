import { NgModule } from '@angular/core';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { RequestWrapperModule } from '@widgets//request-wrapper';

@NgModule({
  imports: [FaqRoutingModule, RequestWrapperModule],
  declarations: [FaqComponent],
})
export class FaqModule {}
