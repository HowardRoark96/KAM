import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLORS } from '@utils/constants/color.constant';
import { UsersService } from '@api/services';
import { CountryCodeDescription, CountryCodeType } from '@api/model';
import { Nullable } from '@customTypes/nullable.type';
import { toNullableNumber } from '@utils/functions/to-nullable-number';
import { getRouteParams } from '@utils/functions/get-route-params';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NgIf, UpperCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ExecuteWithModule } from '@pipes/execute-with';

@Component({
  selector: 'app-personal-data',
  templateUrl: 'personal-data.component.html',
  styleUrls: ['personal-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzAvatarModule,
    NzGridModule,
    NzDescriptionsModule,
    RequestWrapperModule,
    NgIf,
    UpperCasePipe,
    ExecuteWithModule,
    TranslateModule,
  ],
})
export class PersonalDataComponent {
  readonly usersService = inject(UsersService);

  readonly userId = toNullableNumber(getRouteParams()['id']);
  readonly COLORS = COLORS;
  readonly PREFIX = 'PAGE.PROFILE.';

  getUser$ = this.usersService.getUser(this.userId!);

  getCountryData = (code: Nullable<CountryCodeType>) => code && CountryCodeDescription[code];
}
