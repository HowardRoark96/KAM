import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLocale$ } from '@utils/functions/locale';
import { Locale } from '@utils/constants';
import { Nullable } from '@customTypes/nullable.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly translateService = inject(TranslateService);
  readonly getLocale$ = getLocale$();

  title = 'knights-and-merchants';

  setLocale = (locale: Nullable<Locale>) => {
    if (!locale) return;
    if (!this.translateService.getDefaultLang()) this.translateService.setDefaultLang(locale);
    this.translateService.use(locale);
  };
}
