import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@widgets/grid';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { RequestWrapperModule } from '@widgets/request-wrapper';

@NgModule({
  imports: [ServersRoutingModule, GridModule, CommonModule, RequestWrapperModule],
  declarations: [ServersComponent],
})
export class ServersModule {}
