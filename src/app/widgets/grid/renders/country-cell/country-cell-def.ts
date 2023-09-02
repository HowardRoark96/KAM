import { ColDef } from 'ag-grid-community';
import { CountryCellComponent } from './country-cell.component';
import { CountryCellParams } from '@widgets/grid/renders/country-cell/country-cell-params';

export const getCountryCellDef = <TData = unknown>(config?: CountryCellParams<TData>): Omit<ColDef, 'field'> => ({
  cellRenderer: CountryCellComponent,
  cellRendererParams: config,
});
