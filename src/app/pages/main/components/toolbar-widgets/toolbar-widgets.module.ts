import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarWidgetsComponent } from './toolbar-widgets.component';

const MAT_MODULES = [MatButtonModule, MatIconModule];

@NgModule({
  imports: [MAT_MODULES],
  exports: [ToolbarWidgetsComponent],
  declarations: [ToolbarWidgetsComponent],
})
export class ToolbarWidgetsModule {}
