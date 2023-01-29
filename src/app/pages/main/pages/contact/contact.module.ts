import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [ContactRoutingModule, RequestWrapperModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
