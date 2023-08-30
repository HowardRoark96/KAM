import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Nullable } from '@customTypes/nullable.type';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';

export interface TagCellConfig {
  labelMap?: Nullable<Record<string, string>>;
  valueAsLabel?: boolean;
  icon?: Nullable<string>;
  colorTagMap?: Record<string, string | NzStatusColor | NzPresetColor>;
  colorTag?: string | NzStatusColor | NzPresetColor;
}

@Component({
  selector: 'app-tag-cell',
  templateUrl: './tag-cell.component.html',
  styleUrls: ['./tag-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagCellComponent implements ICellRendererAngularComp {
  readonly cdr = inject(ChangeDetectorRef);

  value: Nullable<string>;
  icon: Nullable<string>;
  color: Nullable<string | NzStatusColor | NzPresetColor>;

  agInit(params: ICellRendererParams & TagCellConfig) {
    this.refreshView(params);
  }

  refresh(params: ICellRendererParams & TagCellConfig) {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: ICellRendererParams & TagCellConfig) {
    this.icon = params.icon;
    this.color = params.colorTagMap?.[params.value] || params.colorTag;
    this.value = params.valueAsLabel ? params.value : params.labelMap?.[params.value];

    this.cdr.markForCheck();
  }
}
