import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { CountryCellComponent } from './country-cell.component';
import { Nullable } from '@customTypes/nullable.type';

export const countryCellDef = (config?: Nullable<ICellRendererParams>): Omit<ColDef, 'field'> => ({
  cellRenderer: CountryCellComponent,
  cellRendererParams: config,
});
