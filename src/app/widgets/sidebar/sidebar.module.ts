import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ButtonModule } from '@widgets/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, ButtonModule, NzMenuModule, NzToolTipModule, NzIconModule, RouterLink, TranslateModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
})
export class SidebarModule {}
