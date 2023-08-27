import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ButtonModule } from '@widgets/button';
import { NgForOf } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    NzCarouselModule,
    NzImageModule,
    ReactiveFormsModule,
    ReactiveInputModule,
    ButtonModule,
    NgForOf,
    NzFormModule,
    NzIconModule,
    TranslateModule,
  ],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
