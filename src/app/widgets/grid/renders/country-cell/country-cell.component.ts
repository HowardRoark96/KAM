import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { NgIf } from '@angular/common';
import { CountryCellParams } from './country-cell-params';
import { CellParams } from '../utils';

@Component({
  selector: 'app-country-cell',
  templateUrl: './country-cell.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class CountryCellComponent<TData = unknown> implements ICellRendererAngularComp {
  value: Nullable<string>;
  showCountry?: Nullable<boolean>;

  cdr = inject(ChangeDetectorRef);

  agInit(params: CellParams<CountryCellParams<TData>>) {
    this.refreshView(params);
  }

  refresh(params: CellParams<CountryCellParams<TData>>): boolean {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: CellParams<CountryCellParams<TData>>) {
    this.value = params.value?.toLowerCase();
    this.showCountry = params.getShowCountryCallback ? params.getShowCountryCallback?.(params.data) : true;
    this.cdr.markForCheck();
  }
}
