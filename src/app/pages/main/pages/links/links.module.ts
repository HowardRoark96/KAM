import { NgModule } from '@angular/core';
import { LinksComponent } from './links.component';
import { LinksRoutingModule } from './links-routing.module';

@NgModule({
  imports: [LinksRoutingModule],
  declarations: [LinksComponent],
})
export class LinksModule {}
