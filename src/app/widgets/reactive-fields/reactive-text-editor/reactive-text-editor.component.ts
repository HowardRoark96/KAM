import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { ReactiveComponent } from '@widgets/reactive-fields/classes';
import { Nullable } from '@customTypes/nullable.type';

@Component({
  selector: 'app-reactive-text-editor',
  templateUrl: './reactive-text-editor.component.html',
  styleUrls: ['./reactive-text-editor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTextEditorComponent extends ReactiveComponent {
  @Input() rows = 1;
  @Input() height: Nullable<string>;
  @Input() styles: Nullable<{ [key: string]: string }>;
  @Input() format?: 'object' | 'html' | 'text' | 'json';
}
