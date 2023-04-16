import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizeComponent {}
