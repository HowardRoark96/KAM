import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatTabsModule, RouterLink, NgForOf, MatToolbarModule],
  exports: [MainComponent],
  declarations: [MainComponent],
})
export class MainModule {}
