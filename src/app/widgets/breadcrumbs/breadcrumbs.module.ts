import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  imports: [CommonModule, NzBreadCrumbModule, ButtonModule, TranslateModule, NzIconModule, NzTagModule],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
