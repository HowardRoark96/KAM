import { NgModule } from '@angular/core';
import { AuthorizeComponent } from './authorize.component';
import { AuthorizeRoutingModule } from './authorize-routing.module';
import { LocaleSwitcherModule } from '@widgets/locale-switcher';

@NgModule({
  imports: [AuthorizeRoutingModule, LocaleSwitcherModule],
  declarations: [AuthorizeComponent],
})
export class AuthorizeModule {}
