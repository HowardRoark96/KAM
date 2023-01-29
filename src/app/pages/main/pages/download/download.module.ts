import { NgModule } from '@angular/core';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download-routing.module';
import { RequestWrapperModule } from '@components/request-wrapper';

@NgModule({
  imports: [DownloadRoutingModule, RequestWrapperModule],
  declarations: [DownloadComponent],
})
export class DownloadModule {}
