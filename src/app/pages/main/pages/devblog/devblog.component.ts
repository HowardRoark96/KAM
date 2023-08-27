import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-devblog',
  templateUrl: './devblog.component.html',
  styleUrls: ['./devblog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevblogComponent {}
