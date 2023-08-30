import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PaginatedResultDto } from '../model/common';
import { PermissionDto } from '../model/administration';
import { PermissionsMock } from '../mocks/administration';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  getPermissionsList(page: number, perPage: number): Observable<PaginatedResultDto<PermissionDto>> {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return of({
      data: PermissionsMock.slice(start, end),
      page: {
        pages: Math.ceil(PermissionsMock.length / perPage),
        items: PermissionsMock.length,
        page,
        perPage,
      },
    }).pipe(delay(500));
  }
}
