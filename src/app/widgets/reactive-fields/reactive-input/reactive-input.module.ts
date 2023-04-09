import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveInputComponent } from './reactive-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ExecuteWithModule } from '@pipes/execute-with';

const NZ_MODULES = [NzInputModule, NzGridModule, NzFormModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ExecuteWithModule, NZ_MODULES],
  exports: [ReactiveInputComponent],
  declarations: [ReactiveInputComponent],
})
export class ReactiveInputModule {}
