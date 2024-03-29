import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { getCountryCellDef } from '@widgets/grid/renders/country-cell';
import { AppGridOptions, GridGetDataCallback } from '@widgets/grid';
import { getExactWidth, getWidthColDef } from '@widgets/grid/utils';
import { ServerDto } from '@api/model/servers';
import { ServersService } from '@api/services';

const GRID_OPTIONS: AppGridOptions<ServerDto> = {
  getRowId: (params) => params.data.name?.toString() ?? '',
  defaultColDef: { sortable: true },
  columnDefs: [
    {
      field: 'countryCode',
      headerName: 'Country',
      headerClass: 'text-center',
      cellClass: 'text-center',
      initialPinned: 'left',
      lockPinned: true,
      ...getExactWidth(110),
      ...getCountryCellDef(),
    },
    { field: 'name', headerName: 'Server name', flex: 1 },
    { field: 'address', headerName: 'Server address', ...getWidthColDef(180, 120) },
    { field: 'playerCount', headerName: 'Server players', ...getWidthColDef(180, 120) },
  ],
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersComponent {
  private readonly serversService = inject(ServersService);

  gridOptions = { ...GRID_OPTIONS };

  getData$: GridGetDataCallback<ServerDto, 'countryCode' | 'address' | 'name' | 'playerCount'> = (pagination) =>
    this.serversService.getServersList(pagination.page, pagination.perPage);
}
