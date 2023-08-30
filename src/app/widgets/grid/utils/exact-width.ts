import { ColDef } from 'ag-grid-community';

export const getExactWidth = (initialWidth: number): Partial<Omit<ColDef, 'colId' | 'field'>> => ({
  minWidth: initialWidth,
  maxWidth: initialWidth,
  initialWidth,
  resizable: false,
  initialFlex: undefined,
});
