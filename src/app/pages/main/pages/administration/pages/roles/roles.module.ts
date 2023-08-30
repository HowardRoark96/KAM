import { NgModule } from '@angular/core';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { GridModule } from '@widgets/grid';

@NgModule({
  imports: [RolesRoutingModule, GridModule],
  declarations: [RolesComponent],
})
export class RolesModule {}
