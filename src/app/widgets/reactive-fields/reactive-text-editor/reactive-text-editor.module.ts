import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveTextEditorComponent } from './reactive-text-editor.component';

@NgModule({
  imports: [CommonModule, QuillEditorComponent, ReactiveFormsModule, NzGridModule, ExecuteWithModule, NzFormModule],
  exports: [ReactiveTextEditorComponent],
  declarations: [ReactiveTextEditorComponent],
})
export class ReactiveTextEditorModule {}
