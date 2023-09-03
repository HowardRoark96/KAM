import { ColDef } from 'ag-grid-community';
import { TagCellComponent } from './tag-cell.component';
import { TagCellParams } from './tag-cell-params';

export const getTagCellDef = <TData = unknown>(params: TagCellParams<TData>): Omit<ColDef, 'field'> => ({
  cellRenderer: TagCellComponent,
  cellRendererParams: params,
  refData: params?.labelMap || undefined,
});
