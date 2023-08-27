import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveTextareaModule } from '@widgets/reactive-fields/reactive-textarea';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    ContactRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    ReactiveInputModule,
    ReactiveTextareaModule,
    ButtonModule,
    TranslateModule,
  ],
  declarations: [ContactComponent],
})
export class ContactModule {}
