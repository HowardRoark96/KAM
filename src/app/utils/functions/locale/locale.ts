import { inject } from '@angular/core';
import get from 'lodash-es/get';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Locale } from '../../constants';
import { Nullable } from '@customTypes/nullable.type';

export type NestedKeys<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: ObjectType[Key] extends object ? `${Key}.${NestedKeys<ObjectType[Key]>}` : Key;
}[keyof ObjectType & string];

export const getLocale$ = (i18nService = inject(NzI18nService)): Observable<Nullable<Locale>> =>
  i18nService?.localeChange.pipe(
    startWith(i18nService.getLocale()),
    map((res) => res.locale as Locale),
  ) ?? of(Locale.us as Locale);

export const getLocalisation$ = <Localisation>(
  localeLocalisationMap: Record<Locale, Localisation>,
  i18nService = inject(NzI18nService),
): Observable<Nullable<Localisation>> => {
  return getLocale$(i18nService)?.pipe(map((locale) => (locale ? localeLocalisationMap[locale] : null)));
};

export const getLocalizedKeyFn =
  <Localisation extends object>(
    localeLocalisationMap: Record<Locale, Localisation>,
    i18nService = inject(NzI18nService),
  ) =>
  (key: NestedKeys<Localisation>) => {
    if (!i18nService || !key) return key;
    return get(localeLocalisationMap[<Locale>i18nService.getLocaleId()], key, key);
  };
