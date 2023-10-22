import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { PaginatedResultDto, ResultDto, UserDto, UserGameHistoryDto, UserStatisticDto } from '../model';
import { UsersMock, UserStatisticMock, UserGameHistoryMock } from '../mocks';
import { HttpErrorResponse } from '@angular/common/http';

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

  getUser(id: number): Observable<ResultDto<UserDto>> {
    const user = UsersMock.find(({ id: userId }) => userId === id);

    if (!user) return throwError(() => new HttpErrorResponse({ error: 'User not found' }));

    return of({ data: user }).pipe(delay(500));
  }

  getUserStatistic(id: number): Observable<ResultDto<UserStatisticDto>> {
    const user = UserStatisticMock.find(({ id: userId }) => userId === id);

    if (!user) return throwError(() => new HttpErrorResponse({ error: 'User not found' }));

    return of({ data: user }).pipe(delay(500));
  }

  getUserGameHistory(id: number, from: string, to: string): Observable<ResultDto<UserGameHistoryDto[]>> {
    const userGameData = UserGameHistoryMock.find(({ id: userId }) => userId === id);

    if (!userGameData) return throwError(() => new HttpErrorResponse({ error: 'User not found' }));

    const result = userGameData.games.filter(
      (game) =>
        new Date(game.date).getTime() >= new Date(from).getTime() &&
        new Date(game.date).getTime() <= new Date(to).getTime(),
    );

    return of({ data: result }).pipe(delay(500));
  }
}
