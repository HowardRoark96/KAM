import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from '@widgets/grid/grid.component';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [CommonModule, AgGridModule, ExecuteWithModule],
  declarations: [GridComponent],
  exports: [GridComponent],
})
export class GridModule {}
