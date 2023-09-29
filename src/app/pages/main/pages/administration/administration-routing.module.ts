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
    data: {
      breadcrumb: 'PAGE.ADMINISTRATION.LBL',
    },
    children: [
      {
        path: 'users',
        loadChildren: () => import('./pages/users').then((m) => m.UsersModule),
        data: {
          breadcrumb: 'PAGE.ADMINISTRATION.USERS.LBL',
        },
      },
      {
        path: 'roles',
        loadChildren: () => import('./pages/roles').then((m) => m.RolesModule),
        data: {
          breadcrumb: 'PAGE.ADMINISTRATION.ROLES.LBL',
        },
      },
      {
        path: 'permissions',
        loadChildren: () => import('./pages/permissions').then((m) => m.PermissionsModule),
        data: {
          breadcrumb: 'PAGE.ADMINISTRATION.PERMISSIONS.LBL',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
