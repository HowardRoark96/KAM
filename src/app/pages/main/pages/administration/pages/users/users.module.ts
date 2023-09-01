import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { GridModule } from '@widgets/grid';

@NgModule({
  imports: [UsersRoutingModule, GridModule],
  declarations: [UsersComponent],
})
export class UsersModule {}
