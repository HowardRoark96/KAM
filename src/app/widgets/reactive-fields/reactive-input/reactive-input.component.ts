import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveComponent } from '../classes';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-reactive-input[control]',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveInputComponent extends ReactiveComponent {}
