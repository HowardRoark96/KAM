import { IconCellComponent } from './icon-cell.component';
import { ColDef } from 'ag-grid-community';
import { IconCellParams } from './icon-cell-params';

export const getIconCellDef = <TData = unknown>(params: IconCellParams<TData>): Omit<ColDef<TData>, 'field'> => ({
  cellRenderer: IconCellComponent,
  cellRendererParams: params,
  suppressCellFlash: true,
  sortable: false,
});
