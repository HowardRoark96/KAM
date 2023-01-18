import { NgModule } from '@angular/core';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download-routing.module';

@NgModule({
  imports: [DownloadRoutingModule],
  declarations: [DownloadComponent],
})
export class DownloadModule {}
