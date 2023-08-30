import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { RoleDto, RoleType } from '@api/model';
import { exactWidth, widthColDef } from '@widgets/grid/utils';
import { tagCellDef } from '@widgets/grid/renders/tag-cell';
import { RolesService } from '@api/services';
import { NzPresetColor } from 'ng-zorro-antd/core/color';

const ROLE_TYPE_COLOR_TAG_MAP: Record<RoleType, NzPresetColor> = {
  [RoleType.SYSTEM]: 'red',
  [RoleType.USER]: 'geekblue',
};

const GRID_OPTIONS: AppGridOptions<RoleDto> = {
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'id',
      headerName: 'ID',
      headerClass: 'text-center',
      cellClass: 'text-center',
      initialPinned: 'left',
      lockPinned: true,
      ...exactWidth(75),
    },
    {
      field: 'type',
      headerName: 'Role type',
      ...widthColDef(180, 120),
      ...tagCellDef({ valueAsLabel: true, colorTagMap: ROLE_TYPE_COLOR_TAG_MAP }),
    },
    { field: 'name', headerName: 'Role name', ...widthColDef(180, 180) },
    {
      field: 'description.us',
      headerName: 'Role description',
      flex: 1,
      valueFormatter: (params) => params.value || '—',
    },
  ],
};

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesComponent {
  private readonly rolesService = inject(RolesService);

  gridOptions = { ...GRID_OPTIONS };

  getData$: GridGetDataCallback<RoleDto, 'id' | 'type' | 'name' | 'description'> = (pagination) =>
    this.rolesService.getRolesList(pagination.page, pagination.perPage);
}
