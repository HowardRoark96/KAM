import { RankCellComponent } from './rank-cell.component';
import { ColDef } from 'ag-grid-community';
import { RankCellParams } from './rank-cell-params';

export const getRankCellDef = <TData = unknown>(params?: RankCellParams<TData>): Omit<ColDef<TData>, 'field'> => ({
  cellRenderer: RankCellComponent,
  cellRendererParams: params,
  suppressCellFlash: true,
  sortable: false,
});
