import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [MediaRoutingModule, RequestWrapperModule],
  declarations: [MediaComponent],
})
export class MediaModule {}
