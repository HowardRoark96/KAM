import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  AppGridOptions,
  GridGetDataCallback,
  GridOrder,
  GridPagination,
  OrderByOptions,
  PaginatedResult,
  RowDataSource,
} from './grid.interfaces';
import { isObservable, Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Nullable } from '@customTypes/nullable.type';
import { ColDef, GetRowIdFunc, GridReadyEvent, SortChangedEvent } from 'ag-grid-community';
import { NoRowsOverlayComponent } from './widgets/no-rows-overlay';
import { GridTooltipComponent } from './widgets/grid-tooltip';
import { GridTheme } from '@widgets/grid/utils';
import { capitalizeFirstLetter } from '@utils/functions/capitalize-first-letter';

interface FetchDataOptions {
  resetPage?: boolean;
}

@Component({
  selector: 'app-grid[gridOptions]',
  templateUrl: './grid.component.html',
  styleUrls: [`./grid.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent<TModel = unknown, TModelFields = unknown> implements OnChanges {
  @Input() gridClass: Nullable<GridTheme> = 'ag-theme-alpine';
  @Input() gridOptions: Nullable<AppGridOptions<TModel>>;
  @Input() colDefs: Nullable<AppGridOptions['columnDefs']>;
  @Input() rowData: Nullable<RowDataSource<TModel, TModelFields>>;
  @Input()
  set perPageOptions(value: Nullable<number[]>) {
    if (!value?.length) return;
    this.perPage = value[0];
    this._perPageOptions = value;
  }
  @Input() perPageOptionsShown = false;
  @Output() sortChanged = new EventEmitter<SortChangedEvent<TModel>>();
  @Output() gridReady = new EventEmitter<GridReadyEvent<TModel>>();
  @Output() paginationChange = new EventEmitter<GridPagination>();

  get perPageOptions(): number[] {
    return this._perPageOptions;
  }

  get pagination(): GridPagination {
    const { pageIndex, perPage } = this;
    return { page: pageIndex, perPage };
  }

  get order() {
    if (this.gridOptions?.columnApi) {
      const { sort, colId } = this.gridOptions?.columnApi?.getColumnState()?.find((x) => x.sort) || {};
      const order: GridOrder<TModelFields> | undefined =
        sort && colId
          ? {
              orderBy: { asc: OrderByOptions.Asc, desc: OrderByOptions.Desc }[sort],
              fieldBy: capitalizeFirstLetter(colId) as unknown as TModelFields,
            }
          : undefined;

      return order;
    }
    const initialColDefs = this.gridOptions?.columnDefs?.map((colDef: ColDef) =>
      typeof colDef.type === 'string' ? this.gridOptions?.columnTypes?.[colDef.type] : colDef,
    );
    const { initialSort, colId, field } = initialColDefs?.find((x: Nullable<ColDef>) => x?.initialSort) || {};
    const sortField = colId ?? field;
    const order: GridOrder<TModelFields> | undefined =
      initialSort && sortField
        ? {
            orderBy: { asc: OrderByOptions.Asc, desc: OrderByOptions.Desc }[initialSort],
            fieldBy: capitalizeFirstLetter(sortField) as unknown as TModelFields,
          }
        : undefined;

    return order;
  }

  defaultColDef: ColDef<TModel> = {
    resizable: true,
    enableCellChangeFlash: true,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    // TODO: Needs for `server-side` sorting and filtering
    comparator: () => 0,
    unSortIcon: true,
    singleClickEdit: true,
    tooltipComponent: GridTooltipComponent,
    tooltipValueGetter: (value) => value,
    minWidth: 80,
  };

  pageIndex = 1;
  pages = 0;
  perPage = 10;
  items = 0;
  defaultTooltipDelay = 500;

  readonly perPageFc = new FormControl(this.perPage, { nonNullable: true });

  data$?: Observable<TModel[]>;

  noRowsOverlayComponent = NoRowsOverlayComponent;

  private _perPageOptions = [10, 20, 50];

  private cdr = inject(ChangeDetectorRef);

  fetchData(options: FetchDataOptions = {}) {
    if (!this.rowData) return;
    if (options.resetPage) this.resetPage();

    const source = this.getSource();
    this.data$ = source.pipe(
      tap((res) => {
        if (!res || !this.isPaginatedResult(res)) return;
        this.pages = res.page?.pages ?? 0;
        this.items = res.page?.items ?? 0;
        this.perPageOptionsShown = true;
      }),
      map((res) => {
        if (!res) return [];
        return this.isPaginatedResult(res) ? res.data ?? [] : res;
      }),
    );

    // in case of call from ref
    this.cdr.markForCheck();
  }

  resetPage() {
    this.cdr.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('rowData' in changes && this.rowData) this.fetchData();
  }

  getPerPageSelectOptions = (perPageOptions: number[]) => perPageOptions.map((value) => ({ value, label: value }));

  getTotalItemsLegend = (pageIndex: number, perPage: number, items: number) => {
    const from = (pageIndex - 1) * perPage + 1;
    const to = pageIndex * perPage > items ? items : pageIndex * perPage;
    return { from, to, items };
  };

  onGridReady() {
    this.gridReady.emit();
  }

  pageIndexChange(value: number) {
    this.pageIndex = value;
    this.paginationChange.emit(this.pagination);
    if (this.isSourceFunction()) this.fetchData();
  }

  perPageChange(value: number) {
    this.perPage = value;
    this.paginationChange.emit(this.pagination);
    if (this.isSourceFunction()) this.fetchData({ resetPage: true });
  }

  defaultGetRowId: GetRowIdFunc = (params) => params.data?.id?.toString() ?? '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assign<T extends Record<string, any>>(obj: Nullable<T>, defaultObj: T): T {
    return Object.assign(defaultObj, obj || {});
  }

  private isPaginatedResult(res: PaginatedResult<TModel> | TModel[]): res is PaginatedResult<TModel> {
    return !Array.isArray(res);
  }

  private isSourceFunction(
    source: Nullable<RowDataSource<TModel, TModelFields>> = this.rowData,
  ): source is GridGetDataCallback<TModel, TModelFields> {
    return typeof source === 'function';
  }

  private getSource() {
    if (isObservable(this.rowData)) return this.rowData;
    if (this.isSourceFunction(this.rowData)) return this.rowData(this.pagination, this.order);
    return of(this.rowData);
  }
}
