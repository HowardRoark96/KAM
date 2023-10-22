import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalStatsComponent } from './personal-stats.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [TranslateModule.forChild(), NzGridModule, NzIconModule, NgIf],
  declarations: [PersonalStatsComponent],
  exports: [PersonalStatsComponent],
})
export class PersonalStatsModule {}
