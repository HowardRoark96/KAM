import { NgModule } from '@angular/core';
import { PermissionsComponent } from './permissions.component';
import { PermissionsRoutingModule } from './permissions-routing.module';

@NgModule({
  imports: [PermissionsRoutingModule],
  declarations: [PermissionsComponent],
})
export class PermissionsModule {}
