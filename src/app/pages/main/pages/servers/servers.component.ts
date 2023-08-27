import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { debounceTime, delay, of } from 'rxjs';
import { countryCellDef } from '@widgets/grid/renders/country-cell';

export interface ServerDto {
  countryCode?: string | null;
  name?: string | null;
  address?: string | null;
  players?: number | null;
}

const GRID_OPTIONS: GridOptions<ServerDto> = {
  getRowId: (params) => params.data.address?.toString() ?? '',
  defaultColDef: { sortable: true, flex: 1 },
  columnDefs: [
    { field: 'countryCode', ...countryCellDef },
    { field: 'name', headerName: 'Server Name' },
    { field: 'address', headerName: 'Server Address' },
    { field: 'players', headerName: 'Players' },
  ],
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersComponent {
  gridOptions = { ...GRID_OPTIONS, context: this };

  GRID_DATA: ServerDto[] = [
    { countryCode: 'AR', name: 'KaM Remake Server 1', address: '83.6.172.1', players: 1 },
    { countryCode: 'PE', name: 'KaM Remake Server 2', address: '83.6.172.2', players: 12 },
    { countryCode: 'ES', name: 'KaM Remake Server 3', address: '83.6.172.3', players: 45 },
    { countryCode: 'TJ', name: 'KaM Remake Server 4', address: '83.6.172.4', players: 73 },
    { countryCode: 'SM', name: 'KaM Remake Server 5', address: '83.6.172.5', players: 5 },
    { countryCode: 'RU', name: 'KaM Remake Server 6', address: '83.6.172.6', players: 4 },
    { countryCode: 'NO', name: 'KaM Remake Server 7', address: '83.6.172.7', players: 9 },
    { countryCode: 'NZ', name: 'KaM Remake Server 8', address: '83.6.172.8', players: 0 },
    { countryCode: 'BG', name: 'KaM Remake Server 9', address: '83.6.172.9', players: 2 },
    { countryCode: 'BR', name: 'KaM Remake Server 10', address: '83.6.172.10', players: 8 },
    { countryCode: 'CN', name: 'KaM Remake Server 11', address: '83.6.172.11', players: 31 },
    { countryCode: 'CN', name: 'KaM Remake Server 12', address: '83.6.172.12', players: 2 },
    { countryCode: 'CN', name: 'KaM Remake Server 13', address: '83.6.172.13', players: 76 },
    { countryCode: 'FJ', name: 'KaM Remake Server 14', address: '83.6.172.14', players: 21 },
    { countryCode: 'DE', name: 'KaM Remake Server 15', address: '83.6.172.15', players: 32 },
    { countryCode: 'GB', name: 'KaM Remake Server 16', address: '83.6.172.16', players: 1 },
  ];

  getData$ = of(this.GRID_DATA).pipe(delay(3000), debounceTime(3000));
}
