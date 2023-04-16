import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonComponent } from './button.component';

const NZ_MODULES = [NzIconModule, NzButtonModule];

@NgModule({
  imports: [CommonModule, ExecuteWithModule, RouterLink, NZ_MODULES],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
})
export class ButtonModule {}
