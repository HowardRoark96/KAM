import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main';
import { HttpClientModule } from '@angular/common/http';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import ru from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzImageService } from 'ng-zorro-antd/image';
import { MenuService, NzIsMenuInsideDropDownToken } from 'ng-zorro-antd/menu';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Locale } from './utils/constants';
import { LocaleEn, LocaleRu } from '../assets/locale';
import { ExecuteWithModule } from '@pipes/execute-with';

registerLocaleData(en);
registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    MainModule,
    AppRoutingModule,
    ExecuteWithModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    { provide: NZ_CONFIG, useValue: null },
    { provide: NzIsMenuInsideDropDownToken, useValue: false },
    {
      provide: APP_INITIALIZER,
      deps: [TranslateService],
      useFactory: (service: TranslateService) => {
        service.setTranslation(Locale.us, LocaleEn);
        service.setTranslation(Locale.ru, LocaleRu);
        service.setDefaultLang(Locale.us);
        service.use(Locale.us);
      },
    },
    NzNotificationService,
    NzImageService,
    MenuService,
    NzModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
