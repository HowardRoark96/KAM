import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-country-cell',
  templateUrl: './country-cell.component.html',
  styleUrls: ['./country-cell.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCellComponent implements ICellRendererAngularComp {
  value: Nullable<string>;

  cdr = inject(ChangeDetectorRef);

  agInit(params: ICellRendererParams) {
    this.refreshView(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: ICellRendererParams) {
    this.value = params.value?.toLowerCase();
    this.cdr.markForCheck();
  }
}
