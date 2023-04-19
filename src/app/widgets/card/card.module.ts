import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [NzCardModule],
  exports: [CardComponent],
  declarations: [CardComponent],
})
export class CardModule {}
