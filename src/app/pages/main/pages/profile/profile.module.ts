import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDataModule } from './widgets/personal-data';
import { PersonalStatsModule } from './widgets/personal-stats';

@NgModule({
  imports: [NzGridModule, ProfileRoutingModule, PersonalDataModule, PersonalStatsModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
