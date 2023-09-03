import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PermissionsService } from '@api/services';
import { PermissionCodeType, PermissionDto } from '@api/model';
import { getWidthColDef } from '@widgets/grid/utils';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { getTagCellDef } from '@widgets/grid/renders/tag-cell';

const GRID_OPTIONS: AppGridOptions<PermissionDto> = {
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'code',
      headerName: 'Permission code',
      headerClass: 'text-center',
      initialPinned: 'left',
      lockPinned: true,
      ...getWidthColDef(200, 200),
      ...getTagCellDef<PermissionCodeType>({ colorTag: 'magenta' }),
    },
    { field: 'description.us', headerName: 'Permission description', flex: 1 },
  ],
};

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsComponent {
  readonly permissionsService = inject(PermissionsService);

  gridOptions = { ...GRID_OPTIONS, context: this };

  getData$: GridGetDataCallback<PermissionDto, 'id' | 'code' | 'description'> = (pagination) =>
    this.permissionsService.getPermissionsList(pagination.page, pagination.perPage);
}
