import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Nullable } from '@customTypes/nullable.type';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';
import { TagCellParams } from './tag-cell-params';
import isArray from 'lodash-es/isArray';
import isString from 'lodash-es/isString';

@Component({
  selector: 'app-tag-cell',
  templateUrl: './tag-cell.component.html',
  styleUrls: ['./tag-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagCellComponent<T = unknown> implements ICellRendererAngularComp {
  readonly cdr = inject(ChangeDetectorRef);

  readonly isString = isString;
  readonly isArray = isArray;

  value: Nullable<string | T[]>;
  icon: Nullable<string>;
  color: Nullable<string | NzStatusColor | NzPresetColor>;
  colorTagMap?: Record<string, string | NzStatusColor | NzPresetColor>;
  getLabelCallback?: (data: T) => Nullable<string>;
  getColorTagCallback?: (data: T) => Nullable<string>;

  agInit(params: ICellRendererParams & TagCellParams) {
    this.refreshView(params);
  }

  refresh(params: ICellRendererParams & TagCellParams) {
    this.refreshView(params);
    return true;
  }

  getTagColor = (data: T) => {
    const color = this.getColorTagCallback?.(data) || this.color;
    if (!color) return;
    return this.colorTagMap?.[color];
  };

  private refreshView(params: ICellRendererParams & TagCellParams) {
    this.icon = params.icon;
    this.color = params.colorTagMap?.[params.value] || params.colorTag;
    this.colorTagMap = params.colorTagMap;
    this.value = params.labelMap?.[params.value] || params.value;
    this.getLabelCallback = params.getLabelCallback;
    this.getColorTagCallback = params.getColorTagCallback;

    this.cdr.markForCheck();
  }
}
