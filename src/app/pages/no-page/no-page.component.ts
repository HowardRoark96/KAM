import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoPageComponent {
  onBack = () => window.history.back();
}
