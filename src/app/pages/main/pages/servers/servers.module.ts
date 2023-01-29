import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
import { ServersRoutingModule } from './servers-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [ServersRoutingModule, RequestWrapperModule],
  declarations: [ServersComponent],
})
export class ServersModule {}
