import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-widgets',
  templateUrl: './toolbar-widgets.component.html',
  styleUrls: ['./toolbar-widgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarWidgetsComponent {}
