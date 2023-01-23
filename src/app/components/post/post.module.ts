import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SafeHtmlModule } from '@pipes/safeHtml';

const MAT_MODULES = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [NgIf, SafeHtmlModule, MAT_MODULES],
  exports: [PostComponent],
  declarations: [PostComponent],
})
export class PostModule {}
