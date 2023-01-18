import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DownloadComponent } from './download.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadRoutingModule {}
