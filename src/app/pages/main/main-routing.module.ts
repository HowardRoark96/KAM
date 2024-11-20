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
    data: {
      breadcrumb: 'PAGE.HOME.LBL',
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home').then((m) => m.HomeModule),
      },
      {
        path: 'administration',
        loadChildren: () => import('./pages/administration').then((m) => m.AdministrationModule),
        data: {
          breadcrumb: 'PAGE.ADMINISTRATION.LBL',
        },
      },
      {
        path: 'news',
        loadChildren: () => import('./pages/news').then((m) => m.NewsModule),
        data: {
          breadcrumb: 'PAGE.NEWS.LBL',
        },
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about').then((m) => m.AboutModule),
        data: {
          breadcrumb: 'PAGE.ABOUT.LBL',
        },
      },
      {
        path: 'media',
        loadChildren: () => import('./pages/media').then((m) => m.MediaModule),
        data: {
          breadcrumb: 'PAGE.MEDIA.LBL',
        },
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq').then((m) => m.FaqModule),
        data: {
          breadcrumb: 'PAGE.FAQ.LBL',
        },
      },
      {
        path: 'download',
        loadChildren: () => import('./pages/download').then((m) => m.DownloadModule),
        data: {
          breadcrumb: 'PAGE.DOWNLOAD.LBL',
        },
      },
      {
        path: 'contributing',
        loadChildren: () => import('./pages/contributing').then((m) => m.ContributingModule),
        data: {
          breadcrumb: 'PAGE.CONTRIBUTING.LBL',
        },
      },
      {
        path: 'links',
        loadChildren: () => import('./pages/links').then((m) => m.LinksModule),
        data: {
          breadcrumb: 'PAGE.LINKS.LBL',
        },
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact').then((m) => m.ContactModule),
        data: {
          breadcrumb: 'PAGE.CONTACTS.LBL',
        },
      },
      {
        path: 'servers',
        loadChildren: () => import('./pages/servers').then((m) => m.ServersModule),
        data: {
          breadcrumb: 'PAGE.SERVERS.LBL',
        },
      },
      {
        path: 'devblog',
        loadChildren: () => import('./pages/devblog').then((m) => m.DevblogModule),
        data: {
          breadcrumb: 'PAGE.DEVBLOG.LBL',
        },
      },
      {
        path: 'profile/:id',
        loadChildren: () => import('./pages/profile').then((m) => m.ProfileModule),
        data: {
          breadcrumb: 'PAGE.PROFILE.LBL',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
