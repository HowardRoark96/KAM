import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestWrapperModule } from '@components/request-wrapper';
import { GridModule } from '@widgets/grid';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';

@NgModule({
  imports: [ServersRoutingModule, RequestWrapperModule, GridModule, CommonModule],
  declarations: [ServersComponent],
})
export class ServersModule {}
