import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';

@NgModule({
  imports: [MediaRoutingModule],
  declarations: [MediaComponent],
})
export class MediaModule {}
