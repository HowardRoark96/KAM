import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PermissionsComponent } from './permissions.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionsRoutingModule {}
