import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@widgets/sidebar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ButtonModule } from '@widgets/button';
import { LocaleSwitcherModule } from '@widgets/locale-switcher';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SidebarModule,
    NzLayoutModule,
    NzIconModule,
    ButtonModule,
    LocaleSwitcherModule,
  ],
  declarations: [MainComponent],
})
export class MainModule {}
