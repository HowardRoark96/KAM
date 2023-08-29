import { NgModule } from '@angular/core';
import { PermissionsComponent } from './permissions.component';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { GridModule } from '@widgets/grid';

@NgModule({
  imports: [PermissionsRoutingModule, GridModule],
  declarations: [PermissionsComponent],
})
export class PermissionsModule {}
