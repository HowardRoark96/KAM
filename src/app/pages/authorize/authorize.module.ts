import { NgModule } from '@angular/core';
import { AuthorizeComponent } from './authorize.component';
import { AuthorizeRoutingModule } from './authorize-routing.module';

@NgModule({
  imports: [AuthorizeRoutingModule],
  declarations: [AuthorizeComponent],
})
export class AuthorizeModule {}
