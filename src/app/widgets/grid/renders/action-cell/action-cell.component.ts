import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Params } from '@angular/router';
import { isObservable, Observable } from 'rxjs';
import { Nullable } from '@customTypes/nullable.type';
import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button/button.component';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ActionCellParams } from './action-cell-params';
import { LinkTarget } from '@utils/types';

@Component({
  selector: 'app-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCellComponent implements ICellRendererAngularComp {
  readonly cdr = inject(ChangeDetectorRef);

  label: Nullable<string>;
  type: NzButtonType = 'default';
  btnClass: Nullable<string | string[] | Set<string> | { [key: string]: unknown }>;
  size: NzButtonSize = 'default';
  shape: NzButtonShape = null;
  block: Nullable<boolean>;
  danger: Nullable<boolean>;
  isDisabled: Observable<boolean> | Nullable<boolean>;
  leftIcon: Nullable<string>;
  rightIcon: Nullable<string>;
  theme: 'fill' | 'outline' | 'twotone' = 'outline';
  twotoneColor?: string;
  action$: Nullable<() => Nullable<Observable<unknown> | void>>;
  /* Link props */
  linkTarget: LinkTarget = '_self';
  link: Nullable<Array<number | string | undefined> | string | null>;
  queryParams: Nullable<Params>;
  fragment?: string;

  readonly isObservable = isObservable;

  agInit(params: ICellRendererParams & ActionCellParams): void {
    this.refreshView(params);
  }

  refresh(params: ICellRendererParams & ActionCellParams): boolean {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: ICellRendererParams & ActionCellParams) {
    const data = params.data;

    this.label = params.getLabelCallback?.(data) || params.label;
    this.type = params.getTypeCallback?.(data) || params.type || 'default';
    this.btnClass = params.getBtnClassCallback?.(data) || params.btnClass;
    this.size = params.size || 'default';
    this.shape = params.getShapeCallback?.(data) || params.shape || null;
    this.block = params.getBlockCallback?.(data) || params.block;
    this.danger = params.getDangerCallback?.(data) || params.danger;
    this.isDisabled = params.getIsDisabledCallback$?.(data) || params.isDisabled;
    this.leftIcon = params.getLeftIconCallback?.(data) || params.leftIcon;
    this.rightIcon = params.getRightIconCallback?.(data) || params.rightIcon;
    this.theme = params.getThemeCallback?.(data) || params.theme || 'outline';
    this.twotoneColor = params.getTwotoneColorCallback?.(data) || params.twotoneColor || undefined;
    this.action$ = params.getActionCallback$?.(data);
    this.linkTarget = params.getLinkTargetCallback?.(data) || params.linkTarget || '_self';
    this.link = params.getLinkCallback?.(data) || params.link;
    this.queryParams = params.getQueryParamsCallback?.(data) || params.queryParams;
    this.fragment = params.getFragmentCallback?.(data) || params.fragment || undefined;

    this.cdr.markForCheck();
  }
}
