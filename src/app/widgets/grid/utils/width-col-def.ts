import { ColDef } from 'ag-grid-community';

export const widthColDef = (
  initialWidth: number,
  minWidth?: number,
  maxWidth?: number,
): Omit<ColDef, 'colId' | 'field'> => ({
  initialWidth,
  minWidth,
  maxWidth,
});
