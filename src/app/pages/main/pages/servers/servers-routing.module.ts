import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';

const routes: Routes = [
  {
    path: '',
    component: ServersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServersRoutingModule {}
