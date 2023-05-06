import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@widgets/grid';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';

@NgModule({
  imports: [ServersRoutingModule, GridModule, CommonModule],
  declarations: [ServersComponent],
})
export class ServersModule {}
