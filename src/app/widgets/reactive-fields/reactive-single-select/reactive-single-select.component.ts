import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactive-single-select',
  templateUrl: './reactive-single-select.component.html',
  styleUrls: ['./reactive-single-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveSingleSelectComponent {}
