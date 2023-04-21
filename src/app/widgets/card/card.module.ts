import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecuteWithModule } from '@pipes/execute-with';
import { CardComponent } from './card.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [CommonModule, NzCardModule, ExecuteWithModule],
  exports: [CardComponent],
  declarations: [CardComponent],
})
export class CardModule {}
