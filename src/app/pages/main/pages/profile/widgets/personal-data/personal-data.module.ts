import { NgModule } from '@angular/core';
import { PersonalDataComponent } from './personal-data.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NgIf, UpperCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ExecuteWithModule } from '@pipes/execute-with';

@NgModule({
  declarations: [PersonalDataComponent],
  exports: [PersonalDataComponent],
  imports: [
    NzAvatarModule,
    NzGridModule,
    NzDescriptionsModule,
    RequestWrapperModule,
    NgIf,
    TranslateModule.forChild(),
    UpperCasePipe,
    ExecuteWithModule,
  ],
})
export class PersonalDataModule {}
