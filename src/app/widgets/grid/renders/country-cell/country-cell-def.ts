import { ColDef } from 'ag-grid-community';
import { CountryCellComponent } from './country-cell.component';

export const countryCellDef: ColDef = {
  cellRenderer: CountryCellComponent,
};
