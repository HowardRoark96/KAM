import { NgModule } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoaderModule } from '@components/loader';
import { RequestWrapperComponent } from './request-wrapper.component';

@NgModule({
  imports: [AsyncPipe, LoaderModule, NgIf],
  declarations: [RequestWrapperComponent],
  exports: [RequestWrapperComponent],
})
export class RequestWrapperModule {}
