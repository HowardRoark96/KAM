import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from '@widgets/grid/grid.component';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { ReactiveSelectModule } from '@widgets/reactive-fields/reactive-select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    ExecuteWithModule,
    NzPaginationModule,
    RequestWrapperModule,
    ReactiveSelectModule,
    TranslateModule,
  ],
  declarations: [GridComponent],
  exports: [GridComponent],
})
export class GridModule {}
