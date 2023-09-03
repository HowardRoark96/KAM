import { ActionCellParams } from './action-cell-params';
import { ActionCellComponent } from './action-cell.component';
import { ColDef } from 'ag-grid-community';
import { getExactWidth } from '@widgets/grid/utils';

export const getActionCellDef = <TData = unknown>(
  params: ActionCellParams<TData>,
): Omit<ColDef<TData>, 'field'> & { field: undefined } => ({
  field: undefined,
  cellRenderer: ActionCellComponent,
  cellRendererParams: params,
  suppressCellFlash: true,
  sortable: false,
  ...(!params.getLabelCallback && !params.label ? { ...getExactWidth(58), cellStyle: { padding: '0 5px' } } : {}),
});
