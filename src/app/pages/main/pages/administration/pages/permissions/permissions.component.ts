import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PermissionsService } from '@api/services';
import { PermissionDto } from '@api/model';
import { getExactWidth, getWidthColDef } from '@widgets/grid/utils';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { getTagCellDef } from '@widgets/grid/renders/tag-cell';

const GRID_OPTIONS: AppGridOptions<PermissionDto> = {
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
      field: 'code',
      headerName: 'Permission code',
      ...getWidthColDef(200, 200),
      ...getTagCellDef({ valueAsLabel: true, colorTag: 'magenta' }),
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
  private readonly permissionsService = inject(PermissionsService);

  gridOptions = { ...GRID_OPTIONS, context: this };

  getData$: GridGetDataCallback<PermissionDto, 'id' | 'code' | 'description'> = (pagination) =>
    this.permissionsService.getPermissionsList(pagination.page, pagination.perPage);
}
