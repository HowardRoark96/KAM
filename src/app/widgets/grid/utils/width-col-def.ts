import { ColDef } from 'ag-grid-community';

export const getWidthColDef = (
  initialWidth: number,
  minWidth?: number,
  maxWidth?: number,
): Omit<ColDef, 'colId' | 'field'> => ({
  initialWidth,
  minWidth,
  maxWidth,
});
