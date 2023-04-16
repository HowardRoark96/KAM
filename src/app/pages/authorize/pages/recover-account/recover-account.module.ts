import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverAccountComponent } from './recover-account.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ButtonModule } from '@widgets/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    NzCarouselModule,
    NzImageModule,
    ButtonModule,
    ReactiveFormsModule,
    ReactiveInputModule,
    NzIconModule,
  ],
  declarations: [RecoverAccountComponent],
})
export class RecoverAccountModule {}
