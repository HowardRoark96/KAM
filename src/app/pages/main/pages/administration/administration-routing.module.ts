import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./pages/users').then((m) => m.UsersModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('./pages/roles').then((m) => m.RolesModule),
      },
      {
        path: 'permissions',
        loadChildren: () => import('./pages/permissions').then((m) => m.PermissionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
