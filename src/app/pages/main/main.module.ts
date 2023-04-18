import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@widgets/sidebar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, MainRoutingModule, SidebarModule, NzLayoutModule],
  declarations: [MainComponent],
})
export class MainModule {}
