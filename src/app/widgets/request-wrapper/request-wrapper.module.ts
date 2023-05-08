import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestWrapperComponent } from './request-wrapper.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ButtonModule } from '@widgets/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzSpinModule, ButtonModule, NzIconModule],
  declarations: [RequestWrapperComponent],
  exports: [RequestWrapperComponent],
})
export class RequestWrapperModule {}
