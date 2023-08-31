import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createOptionsForLocalizedEnum } from '@utils/functions/create-options';
import { Locale, LOCALE_NZ_I18N_MAP } from '@utils/constants/locale.constant';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
  styleUrls: ['./locale-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleSwitcherComponent {
  readonly i18nService = inject(NzI18nService);

  readonly localeFormControl = new FormControl('us');

  localeOptions = createOptionsForLocalizedEnum(Locale).map((option) => ({
    ...option,
    label: (option.label as string)?.toUpperCase(),
  }));

  onLocaleChange = (locale: Locale) => {
    this.i18nService.setLocale(LOCALE_NZ_I18N_MAP[locale]);
  };
}
