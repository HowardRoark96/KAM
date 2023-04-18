import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzMenuModeType, NzMenuThemeType } from 'ng-zorro-antd/menu/menu.types';

export interface SidebarItem {
  label: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
  link?: string;
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
  @Input() spacerPx = 32;
  @Input() sidebarWidthPx = 240;

  collapseSidebar = () => {
    this.isCollapsed = !this.isCollapsed;
    return;
  };

  selectMenuItem = () => {};
}
