import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ButtonModule } from '@widgets/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { SignInComponent } from './sign-in.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveInputModule,
    ReactiveFormsModule,
    NzFormModule,
    NzIconModule,
    ButtonModule,
    NzCarouselModule,
    NzImageModule,
    TranslateModule,
  ],
  declarations: [SignInComponent],
})
export class SignInModule {}
