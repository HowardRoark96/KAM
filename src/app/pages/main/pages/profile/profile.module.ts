import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDataModule } from './widgets/personal-data';
import { PersonalStatsModule } from './widgets/personal-stats';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChartModule } from '@widgets/chart';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  imports: [
    NzGridModule,
    NgApexchartsModule,
    ProfileRoutingModule,
    PersonalDataModule,
    PersonalStatsModule,
    RequestWrapperModule,
    NgIf,
    ChartModule,
    ExecuteWithModule,
    AsyncPipe,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
