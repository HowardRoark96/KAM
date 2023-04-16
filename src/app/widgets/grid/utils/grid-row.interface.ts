import { GridCellInterface } from './grid-cell.interface';

export interface GridRowInterface {
  expand?: boolean;
  description?: string;
  cells: GridCellInterface[];
}
