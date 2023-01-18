import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContributingComponent } from './contributing.component';

const routes: Routes = [
  {
    path: '',
    component: ContributingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributingRoutingModule {}
