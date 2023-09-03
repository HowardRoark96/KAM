import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { getWidthColDef } from '@widgets/grid/utils';
import { getActionCellDef } from '@widgets/grid/renders/action-cell';
import { RoleDto, UserDto } from '@api/model';
import { UsersService } from '@api/services';
import { getTagCellDef } from '@widgets/grid/renders/tag-cell';
import { ROLE_TYPE_COLOR_TAG_MAP } from '../roles';
import { getCountryCellDef } from '@widgets/grid/renders/country-cell';
import { filter, tap } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@services/notification';
import { UserModalComponent } from './widgets/user-modal';
import { ModalData } from '@utils/interfaces';
import { ModalModeType } from '@utils/types';
import { Nullable } from '@customTypes/nullable.type';

const GRID_OPTIONS = (context: UsersComponent): AppGridOptions<UserDto> => ({
  context,
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'username',
      headerName: 'User name',
      initialPinned: 'left',
      lockPinned: true,
      ...getWidthColDef(200, 200),
    },
    { field: 'name', headerName: 'Name', ...getWidthColDef(200, 200) },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'roles',
      headerName: 'Roles',
      flex: 1,
      ...getTagCellDef<RoleDto>({
        colorTagMap: ROLE_TYPE_COLOR_TAG_MAP,
        getLabelCallback: (data) => data?.name,
        getColorTagCallback: (data) => data?.type,
      }),
    },
    {
      field: 'country',
      headerName: 'Country',
      headerClass: 'text-center',
      cellClass: 'text-center',
      ...getWidthColDef(110, 110, 110),
      ...getCountryCellDef(),
    },
    {
      field: 'registrationDate',
      headerName: 'Registration date',
      ...getWidthColDef(200, 200),
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<UserDto>({
        leftIcon: 'edit',
        theme: 'twotone',
        getActionCallback$: (data) => context.getEditUserCallback$(data),
      }),
    },
  ],
});

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  readonly PREFIX = 'PAGE.ADMINISTRATION.USERS';

  readonly usersService = inject(UsersService);
  readonly modal = inject(NzModalService);
  readonly translateService = inject(TranslateService);
  readonly notificationService = inject(NotificationService);

  gridOptions = GRID_OPTIONS(this);

  getData$: GridGetDataCallback<UserDto, 'id' | 'code' | 'description'> = (pagination) =>
    this.usersService.getUsersList(pagination.page, pagination.perPage);

  getEditUserCallback$ = (user: Nullable<UserDto>) => () => {
    return this.modal
      .create<UserModalComponent, ModalData<UserDto>, UserDto>({
        nzTitle: this.translateService.instant(`${this.PREFIX}.EDIT`),
        nzContent: UserModalComponent,
        nzData: { data: user, mode: ModalModeType.EDIT },
        nzWidth: 600,
        nzMaskClosable: false,
      })
      .afterClose.pipe(
        filter(Boolean),
        tap(this.notificationService.onSuccess(this.translateService.instant(`${this.PREFIX}.SUCCESS_UPDATE`))),
        tap(this.notificationService.onError(this.translateService.instant(`${this.PREFIX}.ERROR_UPDATE`))),
      );
  };
}
