import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef, Column, ITooltipParams } from 'ag-grid-community';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Nullable } from '@customTypes/nullable.type';
import { ExecuteWithModule } from '@pipes/execute-with';
import isNumber from 'lodash-es/isNumber';

@Component({
  selector: 'app-grid-tooltip',
  templateUrl: './grid-tooltip.component.html',
  styleUrls: ['./grid-tooltip.component.scss'],
  standalone: true,
  imports: [CommonModule, ExecuteWithModule, NzToolTipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridTooltipComponent implements ITooltipAngularComp {
  readonly host: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  params?: ITooltipParams;
  cellValueElement: Nullable<HTMLElement>;

  agInit(params: ITooltipParams): void {
    this.params = params;
    this.cellValueElement = this.getCellValueElement(params);
  }

  isShown = (params: Nullable<ITooltipParams>, cellValueElement: Nullable<HTMLElement>) => {
    if (!params || !cellValueElement) return false;
    const { colDef } = params;
    if ((colDef as ColDef).cellRenderer) return false;
    if (cellValueElement.offsetWidth >= cellValueElement.scrollWidth) return false;

    return true;
  };

  /**
   * Finding out element for check on "..."
   */
  getCellValueElement(params?: ITooltipParams): Nullable<HTMLElement> {
    if (!params) return null;
    const agGridElement = this.host?.nativeElement?.parentElement;
    const rowIndex = params.node?.rowIndex;
    const colId = (params.column as Column)?.getColId();

    if (!agGridElement || !isNumber(rowIndex) || !colId) return null;

    return agGridElement.querySelector<HTMLElement>(`[row-index="${rowIndex}"] > [col-id="${colId}"] .ag-cell-value`);
  }
}
