import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ReactiveErrorComponent } from './reactive-error.component';

const NZ_MODULES = [NzIconModule, NzToolTipModule];

@NgModule({
  imports: [CommonModule, NZ_MODULES],
  exports: [ReactiveErrorComponent],
  declarations: [ReactiveErrorComponent],
})
export class ReactiveErrorModule {}
