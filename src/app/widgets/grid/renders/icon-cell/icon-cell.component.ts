import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Nullable } from '@customTypes/nullable.type';
import { COLORS } from '@utils/constants/color.constant';
import { CellParams } from '@widgets/grid/renders/utils';
import { IconCellParams } from './icon-cell-params';

@Component({
  selector: 'app-icon-cell',
  templateUrl: './icon-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCellComponent<TData = unknown> implements ICellRendererAngularComp {
  readonly COLORS = COLORS;

  icon: Nullable<string>;
  iconTheme: Nullable<'fill' | 'outline' | 'twotone'>;
  color: Nullable<string>;
  twotoneColor: Nullable<string>;
  class: Nullable<string>;

  agInit(params: CellParams<IconCellParams<TData>>) {
    this.refreshView(params);
  }

  refresh(params: CellParams<IconCellParams<TData>>) {
    this.refreshView(params);
    return true;
  }

  private refreshView(params: CellParams<IconCellParams<TData>>) {
    const data = params.data;

    this.icon = params.getIconCallback?.(data) || params.icon;
    this.iconTheme = params.getIconThemeCallback?.(data) || params.iconTheme;
    this.color = params.getColorCallback?.(data) || params.color;
    this.twotoneColor = params.getTwotoneColorCallback?.(data) || params.twotoneColor;
    this.class = params.class;
  }
}
