import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CardModule } from '@widgets/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [AboutRoutingModule, CardModule, NzAvatarModule, NzIconModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
