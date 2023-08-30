import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PaginatedResultDto } from '../model/common';
import { ServersMock } from '../mocks/servers';
import { ServerDto } from '../model/servers';

@Injectable({ providedIn: 'root' })
export class ServersService {
  getServersList(page: number, perPage: number): Observable<PaginatedResultDto<ServerDto>> {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return of({
      data: ServersMock.slice(start, end),
      page: {
        pages: Math.ceil(ServersMock.length / perPage),
        items: ServersMock.length,
        page,
        perPage,
      },
    }).pipe(delay(500));
  }
}
