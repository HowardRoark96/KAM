import { NgModule } from '@angular/core';
import { DatePipe, NgIf, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SafeHtmlModule } from '@pipes/safeHtml';
import { PostComponent } from './post.component';
import { DateModule } from './components/date';

const MAT_MODULES = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [NgIf, SafeHtmlModule, DatePipe, DateModule, NgStyle, MAT_MODULES],
  exports: [PostComponent],
  declarations: [PostComponent],
})
export class PostModule {}
