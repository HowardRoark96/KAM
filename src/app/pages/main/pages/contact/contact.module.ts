import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveTextareaModule } from '@widgets/reactive-fields/reactive-textarea';
import { ButtonModule } from '@widgets/button';

@NgModule({
  imports: [
    ContactRoutingModule,
    RequestWrapperModule,
    NzFormModule,
    ReactiveFormsModule,
    ReactiveInputModule,
    ReactiveTextareaModule,
    ButtonModule,
  ],
  declarations: [ContactComponent],
})
export class ContactModule {}
