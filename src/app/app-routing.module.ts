import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageComponent } from './pages/no-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/main').then((m) => m.MainModule),
      },
    ],
  },
  {
    path: 'authorize',
    loadChildren: () => import('./pages/authorize').then((m) => m.AuthorizeModule),
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
