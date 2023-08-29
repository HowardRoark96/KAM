import { ColDef } from 'ag-grid-community';
import { TagCellComponent, TagCellConfig } from './tag-cell.component';
import { Nullable } from '@customTypes/nullable.type';

export const tagCellDef = (config: Nullable<TagCellConfig>): Omit<ColDef, 'field'> => ({
  cellRenderer: TagCellComponent,
  cellRendererParams: config,
  refData: config?.labelMap || undefined,
});
