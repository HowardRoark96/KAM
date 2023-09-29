import { ActivatedRoute } from '@angular/router';
import isEmpty from 'lodash-es/isEmpty';

export interface Breadcrumb {
  url?: string;
  label: string;
}

export const getDynamicBreadcrumbs = (
  activatedRoute: ActivatedRoute,
  url: string,
  breadcrumbs: Breadcrumb[],
): Breadcrumb[] => {
  const children: ActivatedRoute[] = activatedRoute.children;
  if (!children.length) return breadcrumbs;

  for (let child of children) {
    const routeUrl = child.snapshot.url.map((value) => value.path).join('/');
    const label = child.snapshot.data.breadcrumb;

    if (!isEmpty(routeUrl)) url += `/${routeUrl}`;
    if (!isEmpty(label) && !breadcrumbs.some((item) => item.label === label)) breadcrumbs.push({ url, label });

    return getDynamicBreadcrumbs(child, url, breadcrumbs);
  }

  return breadcrumbs;
};
