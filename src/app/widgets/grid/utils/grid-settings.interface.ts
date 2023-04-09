import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';

export interface GridSettingsInterface {
  bordered?: boolean;
  loading?: boolean;
  pagination?: boolean;
  sizeChanger?: boolean;
  title?: string;
  header?: boolean;
  footer?: string;
  expandable?: boolean;
  checkbox?: boolean;
  fixHeader?: boolean;
  noResult?: boolean;
  ellipsis?: boolean;
  simple?: boolean;
  size?: NzTableSize;
  tableScroll?: string;
  tableLayout?: NzTableLayout;
  position?: NzTablePaginationPosition;
  paginationType?: NzTablePaginationType;
}
