import { ChangeDetectionStrategy, Component } from '@angular/core';
import { debounceTime, delay, map, of, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { GridColumnsInterface, GridRowInterface, GridSettingsInterface } from '@widgets/grid/utils';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersComponent {
  error_500$ = throwError(() => {
    const error = new HttpErrorResponse({ error: 'bar', status: 500 });
    return error;
  });

  GRID_DATA: GridRowInterface[] = [
    {
      expand: false,
      cells: [{ value: 'Server Name 1' }, { value: '185.38.248.123' }, { value: '18' }],
    },
    {
      expand: false,
      cells: [{ value: 'Server Name 3' }, { value: '185.38.248.789' }, { value: '34' }],
    },
    {
      expand: false,
      cells: [{ value: 'Server Name 4' }, { value: '185.38.248.098' }, { value: '25' }],
    },
  ];

  GRID_COLUMNS: GridColumnsInterface[] = [
    { name: 'Server Name', width: '150px' },
    { name: 'Server Address', width: '150px' },
    { name: 'Players', width: '150px' },
  ];

  GRID_SETTING: GridSettingsInterface = {
    bordered: true,
    loading: true,
    pagination: true,
    title: 'CURRENTLY ACTIVE SERVERS',
    header: true,
    fixHeader: true,
    ellipsis: true,
  };

  listOfData: GridRowInterface[] = [];

  getData$ = of(50).pipe(
    delay(3000),
    debounceTime(3000),
    map((count) => (this.listOfData = this.generateMockedGridData(count))),
    tap(() => (this.GRID_SETTING.loading = false)),
  );

  generateMockedGridData = (count: number) => {
    const data = [];

    for (let index = 1; index <= count; index++) {
      data.push({
        expand: false,
        cells: [{ value: `Server Name ${index}` }, { value: `185.38.248.${index}` }, { value: index.toString() }],
      });
    }

    return data;
  };
}
