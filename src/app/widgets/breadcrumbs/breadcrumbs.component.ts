import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { filter } from 'rxjs';
import { getDynamicBreadcrumbs } from './breadcrumbs.utils';
import { COLORS } from '@utils/constants/color.constant';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);

  readonly COLORS = COLORS;

  getBreadcrumbs$ = this.router.events.pipe(
    startWith(new NavigationEnd(0, window.location.pathname, '')),
    filter((event) => event instanceof NavigationEnd),
    map(() => getDynamicBreadcrumbs(this.activatedRoute.root, '', [])),
  );
}
