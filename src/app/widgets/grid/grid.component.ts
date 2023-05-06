import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { ColDef, ColGroupDef, GetRowIdFunc, GridOptions, GridReadyEvent, SortChangedEvent } from 'ag-grid-community';
import { NoRowsOverlayComponent } from '@widgets/grid/widgets/no-rows-overlay/no-rows-overlay.component';

export type GridTheme = 'grid-on-light-bg';

@Component({
  selector: 'app-grid[gridOptions]',
  templateUrl: './grid.component.html',
  styleUrls: [`./grid.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent<T> implements OnChanges {
  @Input() gridOptions: Nullable<GridOptions>;
  @Input() colDefs: Nullable<(ColDef | ColGroupDef)[]>;
  @Input() rowData: Nullable<T[]>;
  @Output() sortChanged = new EventEmitter<SortChangedEvent<T>>();
  @Output() gridReady = new EventEmitter<GridReadyEvent<T>>();

  defaultColDef: ColDef<T> = {
    resizable: true,
    enableCellChangeFlash: true,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    comparator: () => 0, // needs for server-side sorting and filtering
    unSortIcon: true,
    minWidth: 80,
  };

  localeText = {
    noRowsToShow: 'Нет данных для отображения',
  };

  noRowsOverlayComponent = NoRowsOverlayComponent;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if ('colDefs' in simpleChanges) this.gridOptions?.api?.setColumnDefs(simpleChanges.colDefs.currentValue);
  }

  defaultGetRowId: GetRowIdFunc = (params) => params.data?.id?.toString() ?? '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assign<T extends Record<string, any>>(obj: Nullable<T>, defaultObj: T): T {
    return Object.assign(defaultObj, obj || {});
  }
}
