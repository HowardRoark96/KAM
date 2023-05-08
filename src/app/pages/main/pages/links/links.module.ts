import { NgModule } from '@angular/core';
import { LinksComponent } from './links.component';
import { LinksRoutingModule } from './links-routing.module';
import { RequestWrapperModule } from '@widgets/request-wrapper';

@NgModule({
  imports: [LinksRoutingModule, RequestWrapperModule],
  declarations: [LinksComponent],
})
export class LinksModule {}
