import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';
import { ReactiveSelectModule } from '@widgets/reactive-fields/reactive-single-select';
import { ButtonModule } from '@widgets/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  imports: [
    MediaRoutingModule,
    RequestWrapperModule,
    ReactiveSelectModule,
    ButtonModule,
    ReactiveFormsModule,
    NzFormModule,
  ],
  declarations: [MediaComponent],
})
export class MediaModule {}
