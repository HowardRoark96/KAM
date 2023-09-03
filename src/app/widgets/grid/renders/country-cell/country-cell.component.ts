import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { ICellRendererParams } from 'ag-grid-community';
import { NgIf } from '@angular/common';
import { CountryCellParams } from './country-cell-params';

@Component({
  selector: 'app-country-cell',
  templateUrl: './country-cell.component.html',
  styleUrls: ['./country-cell.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class CountryCellComponent<T = unknown> implements ICellRendererAngularComp {
  value: Nullable<string>;
  showCountry?: Nullable<boolean>;

  cdr = inject(ChangeDetectorRef);

  agInit(params: ICellRendererParams) {
    this.refreshView(params);
  }

  refresh(params: ICellRendererParams & CountryCellParams<T>): boolean {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: ICellRendererParams & CountryCellParams<T>) {
    this.value = params.value?.toLowerCase();
    this.showCountry = params.getShowCountryCallback ? params.getShowCountryCallback?.(params.data) : true;
    this.cdr.markForCheck();
  }
}
