import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankCellComponent } from './rank-cell.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [RankCellComponent],
  exports: [RankCellComponent],
})
export class RankCellModule {}
