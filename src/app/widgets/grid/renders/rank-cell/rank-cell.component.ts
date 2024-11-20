import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { COLORS } from '@utils/constants/color.constant';
import { RankCellParams } from './rank-cell-params';
import { CellParams } from '../utils';

@Component({
  selector: 'app-rank-cell',
  templateUrl: './rank-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankCellComponent<TData = unknown> implements ICellRendererAngularComp {
  readonly cdr = inject(ChangeDetectorRef);

  readonly COLORS = COLORS;

  value: Nullable<number>;
  positiveRankColor: Nullable<string>;
  negativeRankColor: Nullable<string>;

  agInit(params: CellParams<RankCellParams<TData>>) {
    this.refreshView(params);
  }

  refresh(params: CellParams<RankCellParams<TData>>) {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: CellParams<RankCellParams<TData>>) {
    this.value = params.value;
    this.positiveRankColor = params.positiveRankColor ?? COLORS.GREEN_3;
    this.negativeRankColor = params.negativeRankColor ?? COLORS.RED_2;

    this.cdr.markForCheck();
  }
}
