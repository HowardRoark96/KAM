import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safeHtml.pipe';

@NgModule({
  exports: [SafeHtmlPipe],
  declarations: [SafeHtmlPipe],
})
export class SafeHtmlModule {}
