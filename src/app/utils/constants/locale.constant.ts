import { NzI18nInterface, ru_RU, en_US } from 'ng-zorro-antd/i18n';

export const Locale = {
  us: 'us',
  ru: 'ru',
};

export type Locale = (typeof Locale)[keyof typeof Locale];

export const LOCALE_NZ_I18N_MAP: Record<Locale, NzI18nInterface> = {
  [Locale.us]: en_US,
  [Locale.ru]: ru_RU,
};
