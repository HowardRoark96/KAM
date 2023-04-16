import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExecuteWithModule } from '@pipes/execute-with';
import { ReactiveTextareaComponent } from './reactive-textarea.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

const NZ_MODULES = [NzInputModule, NzGridModule, NzFormModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ExecuteWithModule, NZ_MODULES],
  exports: [ReactiveTextareaComponent],
  declarations: [ReactiveTextareaComponent],
})
export class ReactiveTextareaModule {}
