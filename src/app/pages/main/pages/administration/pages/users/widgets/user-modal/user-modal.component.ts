import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { CountryCodeType, RoleDto, RoleType, UserDto } from '@api/model';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveSelectModule } from '@widgets/reactive-fields/reactive-select';
import { beToFeOptions, createOptionsForLocalizedEnum } from '@utils/functions/create-options';
import { RolesService } from '@api/services';
import { map } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ROLE_TYPE_COLOR_TAG_MAP } from '../../../roles';
import { ModalModeType } from '@utils/types';
import { ModalData, SelectOption } from '@utils/interfaces';
import { PATTERN } from '@utils/constants/form.constant';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzSelectItemInterface } from 'ng-zorro-antd/select/select.types';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule,
    ReactiveInputModule,
    ReactiveSelectModule,
    NzModalModule,
    AsyncPipe,
    NzTagModule,
    NzIconModule,
    JsonPipe,
    NzSelectModule,
    ExecuteWithModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModalComponent {
  readonly PREFIX = 'PAGE.ADMINISTRATION.USERS';

  readonly modal = inject(NzModalRef);
  readonly modalData: Nullable<ModalData<UserDto>> = inject(NZ_MODAL_DATA);
  readonly rolesService = inject(RolesService);

  readonly ModalModeType = ModalModeType;

  readonly form = new FormGroup({
    username: new FormControl<Nullable<string>>(this.modalData?.data?.username, Validators.required),
    name: new FormControl<Nullable<string>>(this.modalData?.data?.name, Validators.required),
    email: new FormControl<Nullable<string>>(this.modalData?.data?.email, [
      Validators.required,
      Validators.pattern(PATTERN.EMAIL),
    ]),
    country: new FormControl<Nullable<string>>(this.modalData?.data?.country),
    registrationDate: new FormControl<Nullable<string>>(this.modalData?.data?.registrationDate),
    roles: new FormControl<Nullable<number[]>>(
      this.modalData?.data?.roles?.map((item) => item.id) || [],
      Validators.required,
    ),
  });

  readonly ROLE_TYPE_COLOR_TAG_MAP = ROLE_TYPE_COLOR_TAG_MAP;
  readonly getRoleTypeOptions = createOptionsForLocalizedEnum(RoleType);
  readonly getCountryCodeTypeOptions = createOptionsForLocalizedEnum(CountryCodeType);
  readonly getRolesOptions$ = this.rolesService.getRolesList().pipe(
    map(({ data }) => data || []),
    map((data) => beToFeOptions(data, { labelPath: 'name', valuePath: 'id' })),
  );

  getRoleTagColor = (option: NzSelectItemInterface, options: Nullable<SelectOption<RoleDto>[]>) => {
    const role = options?.find((role) => role.id === option.nzValue);
    if (!role) return;
    return this.ROLE_TYPE_COLOR_TAG_MAP[role.type];
  };

  closeModal = () => this.modal.destroy();

  create$ = () => this.modal.close(this.form.value);
}
