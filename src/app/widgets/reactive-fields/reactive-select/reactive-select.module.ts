import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSelectComponent } from './reactive-select.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzSelectModule,
    ExecuteWithModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
  ],
  exports: [ReactiveSelectComponent],
  declarations: [ReactiveSelectComponent],
})
export class ReactiveSelectModule {}
