import { formatDate } from '@angular/common';
import { ColDef } from 'ag-grid-community';

export const dateCellDef: Pick<ColDef, 'valueFormatter'> = {
  valueFormatter: ({ value }) => value && formatDate(value, 'dd.MM.yyyy', 'ru'),
};
