import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './loader.component';

const MAT_MODULES = [MatProgressSpinnerModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [NgIf, MAT_MODULES],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class LoaderModule {}
