import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCellComponent } from './tag-cell.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzTagModule, NzIconModule],
  declarations: [TagCellComponent],
  exports: [TagCellComponent],
})
export class TagCellModule {}
