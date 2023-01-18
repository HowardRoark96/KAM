import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LinksComponent } from './links.component';

const routes: Routes = [
  {
    path: '',
    component: LinksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinksRoutingModule {}
