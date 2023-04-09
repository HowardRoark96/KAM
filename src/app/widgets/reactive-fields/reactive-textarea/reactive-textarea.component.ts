import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { ReactiveComponent } from '../classes';
import { Nullable } from '@customTypes/nullable.type';

@Component({
  selector: 'app-reactive-textarea[control]',
  templateUrl: './reactive-textarea.component.html',
  styleUrls: ['./reactive-textarea.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTextareaComponent extends ReactiveComponent {
  @Input() maxCharacterCount: Nullable<number>;

  @Input() computeCharacterCount: (v: string) => number = (v) => v.length;

  @Input() rows = 1;

  @Input() minRows?: number;

  @Input() maxRows?: number;
}
