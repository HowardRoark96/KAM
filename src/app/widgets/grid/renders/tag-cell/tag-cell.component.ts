import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';
import { TagCellParams } from './tag-cell-params';
import isArray from 'lodash-es/isArray';
import isNil from 'lodash-es/isNil';
import { CellParams } from '../utils';

@Component({
  selector: 'app-tag-cell',
  templateUrl: './tag-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagCellComponent<TData = unknown> implements ICellRendererAngularComp {
  readonly cdr = inject(ChangeDetectorRef);

  readonly isNil = isNil;
  readonly isArray = isArray;

  value: Nullable<string | TData[]>;
  icon: Nullable<string>;
  color: Nullable<string | NzStatusColor | NzPresetColor>;
  colorTagMap?: Record<string, string | NzStatusColor | NzPresetColor>;
  getLabelCallback?: (data: TData) => Nullable<string>;
  getColorTagCallback?: (data: TData) => Nullable<string>;

  agInit(params: CellParams<TagCellParams<TData>>) {
    this.refreshView(params);
  }

  refresh(params: CellParams<TagCellParams<TData>>) {
    this.refreshView(params);
    return true;
  }

  getTagColor = (value: CellParams<TagCellParams<TData>>['value']) => {
    const color = this.getColorTagCallback?.(value) || this.color;
    if (!color) return;
    if (!this.colorTagMap) return color;

    return this.colorTagMap?.[color];
  };

  private refreshView(params: CellParams<TagCellParams<TData>>) {
    this.icon = params.icon;
    this.color = params.colorTagMap?.[params.value] || params.colorTag;
    this.colorTagMap = params.colorTagMap;
    this.value = params.labelMap?.[params.value] || params.value;
    this.getLabelCallback = params.getLabelCallback;
    this.getColorTagCallback = params.getColorTagCallback;

    this.cdr.markForCheck();
  }
}
