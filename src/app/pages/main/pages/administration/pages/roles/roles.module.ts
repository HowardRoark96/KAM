import { NgModule } from '@angular/core';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { GridModule } from '@widgets/grid';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [RolesRoutingModule, GridModule, ButtonModule, TranslateModule],
  declarations: [RolesComponent],
})
export class RolesModule {}
