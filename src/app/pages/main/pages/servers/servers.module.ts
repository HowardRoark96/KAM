import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
import { ServersRoutingModule } from './servers-routing.module';

@NgModule({
  imports: [ServersRoutingModule],
  declarations: [ServersComponent],
})
export class ServersModule {}
