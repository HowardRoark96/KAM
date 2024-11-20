import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCellComponent } from './icon-cell.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [IconCellComponent],
  exports: [IconCellComponent],
})
export class IconCellModule {}
