import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionCellComponent } from './action-cell.component';
import { ButtonModule } from '@widgets/button';

@NgModule({
  imports: [ButtonModule, CommonModule, RouterModule, ButtonModule],
  declarations: [ActionCellComponent],
})
export class ActionCellModule {}
