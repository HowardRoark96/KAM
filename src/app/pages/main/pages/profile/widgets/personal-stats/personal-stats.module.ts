import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalStatsComponent } from './personal-stats.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [TranslateModule.forChild(), NzGridModule, NzIconModule, RequestWrapperModule, NgIf],
  declarations: [PersonalStatsComponent],
  exports: [PersonalStatsComponent],
})
export class PersonalStatsModule {}
