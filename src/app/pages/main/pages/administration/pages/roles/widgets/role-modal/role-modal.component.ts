import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { RoleDto, RoleType } from '@api/model';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveInputModule } from '@widgets/reactive-fields/reactive-input';
import { ReactiveSelectModule } from '@widgets/reactive-fields/reactive-select';
import { ReactiveTextareaModule } from '@widgets/reactive-fields/reactive-textarea';
import { beToFeOptions, createOptionsForLocalizedEnum } from '@utils/functions/create-options';
import { PermissionsService } from '@api/services';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ROLE_TYPE_COLOR_TAG_MAP } from '../..';

export const ModalModeType = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
};

export type ModalModeType = (typeof ModalModeType)[keyof typeof ModalModeType];

export interface RoleModalData {
  data?: Nullable<RoleDto>;
  mode?: Nullable<ModalModeType>;
}

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule,
    ReactiveInputModule,
    ReactiveSelectModule,
    ReactiveTextareaModule,
    NzModalModule,
    AsyncPipe,
    NzTagModule,
    NzIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleModalComponent {
  readonly modal = inject(NzModalRef);
  readonly modalData: Nullable<RoleModalData> = inject(NZ_MODAL_DATA);
  readonly permissionsService = inject(PermissionsService);

  readonly ModalModeType = ModalModeType;

  readonly form = new FormGroup({
    name: new FormControl<Nullable<string>>(this.modalData?.data?.name, Validators.required),
    type: new FormControl<Nullable<RoleType>>(this.modalData?.data?.type || RoleType.USER, Validators.required),
    permissions: new FormControl<Nullable<number[]>>(
      this.modalData?.data?.permissions?.map((item) => item.id) || [],
      Validators.required,
    ),
    description: new FormControl<Nullable<string>>(this.modalData?.data?.description?.us || null),
  });

  readonly ROLE_TYPE_COLOR_TAG_MAP = ROLE_TYPE_COLOR_TAG_MAP;
  readonly getRoleTypeOptions = createOptionsForLocalizedEnum(RoleType);
  readonly getRolePermissionsOptions$ = this.permissionsService.getPermissionsList().pipe(
    map(({ data }) => data || []),
    map((data) => beToFeOptions(data, { labelPath: 'code', valuePath: 'id' })),
  );

  closeModal = () => this.modal.destroy();

  create$ = () => this.modal.close(this.form.value);
}
