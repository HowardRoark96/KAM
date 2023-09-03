import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PaginatedResultDto } from '../model/common';
import { RoleDto } from '../model/administration';
import { RolesMock } from '../mocks';

@Injectable({ providedIn: 'root' })
export class RolesService {
  getRolesList(page?: number, perPage?: number): Observable<PaginatedResultDto<RoleDto>> {
    if (!page) page = 1;
    if (!perPage) perPage = RolesMock.length;

    const start = (page - 1) * perPage;
    const end = start + perPage;

    return of({
      data: RolesMock.slice(start, end),
      page: {
        pages: Math.ceil(RolesMock.length / perPage),
        items: RolesMock.length,
        page,
        perPage,
      },
    }).pipe(delay(500));
  }
}
