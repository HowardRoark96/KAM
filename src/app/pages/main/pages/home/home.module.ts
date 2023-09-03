import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NzIconModule, TranslateModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
