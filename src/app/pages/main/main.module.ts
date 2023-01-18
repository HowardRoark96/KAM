import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgForOf } from '@angular/common';
import { ToolbarWidgetsModule } from './components/toolbar-widgets';
import { MainRoutingModule } from './main-routing.module';

const MAT_MODULES = [MatTabsModule, MatToolbarModule];

@NgModule({
  imports: [RouterLink, NgForOf, MAT_MODULES, ToolbarWidgetsModule, RouterOutlet, MainRoutingModule],
  declarations: [MainComponent],
})
export class MainModule {}
