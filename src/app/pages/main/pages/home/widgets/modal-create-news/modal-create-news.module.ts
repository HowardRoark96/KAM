import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCreateNewsComponent } from './modal-create-news.component';
import { ButtonModule } from '@widgets/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveTextEditorModule } from '@widgets/reactive-fields/reactive-text-editor';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NewsCardModule } from '../news-card';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,
    ReactiveInputModule,
    ReactiveTextEditorModule,
    NzTabsModule,
    NewsCardModule,
    ExecuteWithModule,
  ],
  declarations: [ModalCreateNewsComponent],
})
export class ModalCreateNewsModule {}
