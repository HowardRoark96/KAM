import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { RoleDto, RoleType } from '@api/model';
import { getExactWidth, getWidthColDef } from '@widgets/grid/utils';
import { getTagCellDef } from '@widgets/grid/renders/tag-cell';
import { RolesService } from '@api/services';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { getActionCellDef } from '@widgets/grid/renders/action-cell';
import { COLORS } from '@utils/constants/color.constant';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs';
import { GridComponent } from '@widgets/grid/grid.component';
import { RoleModalComponent } from './widgets/role-modal';
import { Nullable } from '@customTypes/nullable.type';
import { NotificationService } from '@services/notification';

export const ROLE_TYPE_COLOR_TAG_MAP: Record<RoleType, NzPresetColor> = {
  [RoleType.SYSTEM]: 'red',
  [RoleType.USER]: 'geekblue',
};

const GRID_OPTIONS = (context: RolesComponent): AppGridOptions<RoleDto> => ({
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'id',
      headerName: 'ID',
      headerClass: 'text-center',
      cellClass: 'text-center',
      initialPinned: 'left',
      lockPinned: true,
      ...getExactWidth(75),
    },
    {
      field: 'type',
      headerName: 'Role type',
      ...getWidthColDef(180, 120),
      ...getTagCellDef({ valueAsLabel: true, colorTagMap: ROLE_TYPE_COLOR_TAG_MAP }),
    },
    { field: 'name', headerName: 'Role name', ...getWidthColDef(180, 180) },
    {
      field: 'description.us',
      headerName: 'Role description',
      flex: 1,
      valueFormatter: (params) => params.value || '—',
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<RoleDto>({
        leftIcon: 'edit',
        theme: 'twotone',
        getActionCallback$: (data) => context.getEditRoleCallback$(data),
      }),
    },
    {
      cellClass: 'text-center',
      initialPinned: 'right',
      lockPinned: true,
      ...getActionCellDef<RoleDto>({
        leftIcon: 'delete',
        theme: 'twotone',
        twotoneColor: COLORS.RED_3,
        getIsDisabledCallback$: (data) => data?.type === RoleType.SYSTEM,
        getActionCallback$: () => context.getDeleteRoleCallback$(),
      }),
    },
  ],
});

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesComponent {
  @ViewChild(GridComponent) grid?: GridComponent;

  readonly PREFIX = 'PAGE.ADMINISTRATION.ROLES';

  readonly rolesService = inject(RolesService);
  readonly modal = inject(NzModalService);
  readonly translateService = inject(TranslateService);
  readonly notificationService = inject(NotificationService);

  gridOptions = GRID_OPTIONS(this);

  getData$: GridGetDataCallback<RoleDto, 'id' | 'type' | 'name' | 'description'> = (pagination) =>
    this.rolesService.getRolesList(pagination.page, pagination.perPage);

  getCreateRoleCallback$ = () => {
    return this.modal
      .create<RoleModalComponent, null, RoleDto>({
        nzTitle: this.translateService.instant(`${this.PREFIX}.CREATE`),
        nzContent: RoleModalComponent,
        nzWidth: 600,
      })
      .afterClose.pipe(
        filter(Boolean),
        tap(this.notificationService.onSuccess(this.translateService.instant(`${this.PREFIX}.SUCCESS_CREATE`))),
        tap(this.notificationService.onError(this.translateService.instant(`${this.PREFIX}.ERROR_CREATE`))),
      );
  };

  getEditRoleCallback$ = (role: Nullable<RoleDto>) => () => {
    return this.modal
      .create<RoleModalComponent, Nullable<RoleDto>, Nullable<RoleDto>>({
        nzTitle: this.translateService.instant(`${this.PREFIX}.CREATE`),
        nzContent: RoleModalComponent,
        nzWidth: 600,
        nzData: role,
      })
      .afterClose.pipe(
        filter(Boolean),
        tap(this.notificationService.onSuccess(this.translateService.instant(`${this.PREFIX}.SUCCESS_UPDATE`))),
        tap(this.notificationService.onError(this.translateService.instant(`${this.PREFIX}.ERROR_UPDATE`))),
      );
  };

  getDeleteRoleCallback$ = () => () => {
    return this.modal
      .confirm({
        nzTitle: this.translateService.instant('COMMON.MODAL.CONFIRM'),
        nzIconType: 'delete',
        nzContent: this.translateService.instant(`${this.PREFIX}.DELETE_CONTENT`),
        nzOkText: this.translateService.instant('COMMON.BUTTON.YES'),
        nzOkType: 'primary',
        nzOnOk: () => true,
        nzCancelText: this.translateService.instant('COMMON.BUTTON.NO'),
      })
      .afterClose.pipe(
        tap(() => this.grid?.fetchData({ resetPage: true })),
        tap(this.notificationService.onSuccess(this.translateService.instant(`${this.PREFIX}.SUCCESS_DELETE`))),
        tap(this.notificationService.onError(this.translateService.instant(`${this.PREFIX}.ERROR_DELETE`))),
      );
  };
}
