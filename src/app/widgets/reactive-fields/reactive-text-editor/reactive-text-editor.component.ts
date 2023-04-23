import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { ReactiveComponent } from '@widgets/reactive-fields/classes';

@Component({
  selector: 'app-reactive-text-editor',
  templateUrl: './reactive-text-editor.component.html',
  styleUrls: ['./reactive-text-editor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTextEditorComponent extends ReactiveComponent {
  @Input() rows = 1;
}
