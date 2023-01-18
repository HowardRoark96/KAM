import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DevblogComponent } from './devblog.component';

const routes: Routes = [
  {
    path: '',
    component: DevblogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevblogRoutingModule {}
