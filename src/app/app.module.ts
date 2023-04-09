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
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzNotificationService } from 'ng-zorro-antd/notification';

registerLocaleData(en);

const APP_NZ_CONFIG: NzConfig = {
  message: {
    nzDuration: 5000,
    nzMaxStack: 5,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MainModule, AppRoutingModule],
  providers: [
    { provide: NZ_CONFIG, useValue: APP_NZ_CONFIG },
    { provide: NZ_I18N, useValue: en_US },
    NzNotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
