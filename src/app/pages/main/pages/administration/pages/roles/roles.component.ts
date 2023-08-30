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
import { tap } from 'rxjs';
import { GridComponent } from '@widgets/grid/grid.component';

const ROLE_TYPE_COLOR_TAG_MAP: Record<RoleType, NzPresetColor> = {
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
        getActionCallback$: () => context.getEditRoleCallback$(),
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

  readonly rolesService = inject(RolesService);
  readonly modal = inject(NzModalService);
  readonly translateService = inject(TranslateService);

  gridOptions = GRID_OPTIONS(this);

  getData$: GridGetDataCallback<RoleDto, 'id' | 'type' | 'name' | 'description'> = (pagination) =>
    this.rolesService.getRolesList(pagination.page, pagination.perPage);

  getEditRoleCallback$ = () => () => {};

  getDeleteRoleCallback$ = () => () => {
    return this.modal
      .confirm({
        nzTitle: this.translateService.instant('COMMON.MODAL.CONFIRM'),
        nzContent: this.translateService.instant('PAGE.ADMINISTRATION.ROLES.DELETE_CONTENT'),
        nzOkText: this.translateService.instant('COMMON.BUTTON.YES'),
        nzOkType: 'primary',
        nzOnOk: () => true,
        nzCancelText: this.translateService.instant('COMMON.BUTTON.NO'),
      })
      .afterClose.pipe(tap(() => this.grid?.fetchData({ resetPage: true })));
  };
}
