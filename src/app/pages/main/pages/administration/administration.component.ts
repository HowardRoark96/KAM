import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministrationComponent {}
