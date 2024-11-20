import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { inject } from '@angular/core';

/**
 * To replace route.parent?.parent?...?.params?
 * Combines all params in hierarchy
 */
export function getRouteParams<T extends Record<string, unknown> = Record<string, string>>(
  route: ActivatedRoute = inject(ActivatedRoute),
) {
  return {
    ...route.pathFromRoot.reduce<T>((acc, { snapshot }) => Object.assign(acc, snapshot.params), {} as T),
    ...(route.snapshot.queryParams as T),
  };
}

export function getRouteParams$<T extends Record<string, unknown> = Record<string, string>>(
  { pathFromRoot, queryParams }: ActivatedRoute = inject(ActivatedRoute),
) {
  return combineLatest([...pathFromRoot.map(({ params }) => params), queryParams]).pipe(
    map((paramsArr) => paramsArr.reduce<T>((acc, params) => Object.assign(acc, params), {} as T)),
  );
}

export function getRouteContextData<T extends Record<string, unknown> = Record<string, string>>(
  route: ActivatedRoute = inject(ActivatedRoute),
) {
  return {
    ...route.pathFromRoot.reduce<T>((acc, { snapshot }) => Object.assign(acc, snapshot.data), {} as T),
  };
}
