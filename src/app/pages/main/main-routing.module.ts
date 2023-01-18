import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about').then((m) => m.AboutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
