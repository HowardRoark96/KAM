import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main';
import { HttpClientModule } from '@angular/common/http';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzIsMenuInsideDropDownToken, MenuService } from 'ng-zorro-antd/menu';
import { NzModalService } from 'ng-zorro-antd/modal';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MainModule, AppRoutingModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: null },
    { provide: NzIsMenuInsideDropDownToken, useValue: false },
    NzNotificationService,
    NzImageService,
    MenuService,
    NzModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
