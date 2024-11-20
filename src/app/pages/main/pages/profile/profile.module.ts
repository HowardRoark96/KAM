import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChartModule } from '@widgets/chart';
import { ExecuteWithModule } from '@pipes/execute-with';
import { PersonalStatisticComponent } from './widgets/personal-statistic';
import { TranslateModule } from '@ngx-translate/core';
import { GameHistoryComponent } from './widgets/game-history';
import { PersonalDataComponent } from './widgets/personal-data';

@NgModule({
  imports: [
    AsyncPipe,
    ChartModule,
    ExecuteWithModule,
    NgApexchartsModule,
    NgIf,
    NzGridModule,
    PersonalStatisticComponent,
    ProfileRoutingModule,
    RequestWrapperModule,
    TranslateModule,
    GameHistoryComponent,
    PersonalDataComponent,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
