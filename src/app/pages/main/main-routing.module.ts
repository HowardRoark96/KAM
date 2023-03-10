import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
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
      {
        path: 'media',
        loadChildren: () => import('./pages/media').then((m) => m.MediaModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq').then((m) => m.FaqModule),
      },
      {
        path: 'download',
        loadChildren: () => import('./pages/download').then((m) => m.DownloadModule),
      },
      {
        path: 'contributing',
        loadChildren: () => import('./pages/contributing').then((m) => m.ContributingModule),
      },
      {
        path: 'links',
        loadChildren: () => import('./pages/links').then((m) => m.LinksModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact').then((m) => m.ContactModule),
      },
      {
        path: 'servers',
        loadChildren: () => import('./pages/servers').then((m) => m.ServersModule),
      },
      {
        path: 'devblog',
        loadChildren: () => import('./pages/devblog').then((m) => m.DevblogModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
