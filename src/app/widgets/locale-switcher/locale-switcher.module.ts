import { NgModule } from '@angular/core';
import { LocaleSwitcherComponent } from '@widgets/locale-switcher/locale-switcher.component';
import { ReactiveSelectModule } from '@widgets/reactive-fields/reactive-select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [ReactiveSelectModule, TranslateModule],
  declarations: [LocaleSwitcherComponent],
  exports: [LocaleSwitcherComponent],
})
export class LocaleSwitcherModule {}
