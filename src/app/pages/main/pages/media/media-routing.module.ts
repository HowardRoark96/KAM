import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
