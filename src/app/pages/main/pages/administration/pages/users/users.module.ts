import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { GridModule } from '@widgets/grid';
import { ButtonModule } from '@widgets/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [UsersRoutingModule, GridModule, ButtonModule, TranslateModule],
  declarations: [UsersComponent],
})
export class UsersModule {}
