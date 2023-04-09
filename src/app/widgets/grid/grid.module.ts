import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ExecuteWithModule } from '@pipes/execute-with';
import { GridComponent } from './grid.component';

const NZ_MODULES = [NzTableModule];

@NgModule({
  imports: [CommonModule, NZ_MODULES, ExecuteWithModule],
  exports: [GridComponent],
  declarations: [GridComponent],
})
export class GridModule {}
