import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDataModule } from './widgets/personal-data';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [ProfileRoutingModule, PersonalDataModule, NzGridModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
