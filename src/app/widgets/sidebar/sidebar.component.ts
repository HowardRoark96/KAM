import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzMenuModeType, NzMenuThemeType } from 'ng-zorro-antd/menu/menu.types';
import { Nullable } from '@customTypes/nullable.type';

export interface SidebarItem {
  label: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
  link?: Nullable<Array<number | string | undefined> | string | null>;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() sidebarItems!: SidebarItem[];
  @Input() showCollapseBtn = false;
  @Input() isCollapsed = false;
  @Input() themeType: NzMenuThemeType = 'light';
  @Input() modeType: NzMenuModeType = 'inline';
  @Input() tooltipPlacement: 'top' | 'right' | 'bottom' | 'left' = 'right';
  @Input() spacerPx = 16;
  @Input() sidebarWidthPx = 280;

  collapseSidebar = () => {
    this.isCollapsed = !this.isCollapsed;
  };

  selectMenuItem = () => {};
}
