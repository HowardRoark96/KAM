import { NgModule } from '@angular/core';
import { ButtonModule } from '@widgets/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NoPageComponent } from './no-page.component';

@NgModule({
  imports: [ButtonModule, NzIconModule],
  declarations: [NoPageComponent],
})
export class NoPageModule {}
