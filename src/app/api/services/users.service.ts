import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PaginatedResultDto } from '../model/common';
import { UserDto } from '../model/administration';
import { UsersMock } from '../mocks';

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsersList(page?: number, perPage?: number): Observable<PaginatedResultDto<UserDto>> {
    if (!page) page = 1;
    if (!perPage) perPage = UsersMock.length;

    const start = (page - 1) * perPage;
    const end = start + perPage;

    return of({
      data: UsersMock.slice(start, end),
      page: {
        pages: Math.ceil(UsersMock.length / perPage),
        items: UsersMock.length,
        page,
        perPage,
      },
    }).pipe(delay(500));
  }
}
