import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Nullable } from '@customTypes/nullable.type';
import { LOADER_DEFAULT_ERROR_MESSAGE, LOADER_LOADING_TEXT, LOADER_RETRY_TEXT, LoaderError } from './utils';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() isLoading: Nullable<boolean> = false;

  @Input() error: Nullable<LoaderError> = null;

  @Input() showContent: Nullable<boolean> = false;

  @Output() retry = new EventEmitter<void>();

  readonly retryText = LOADER_RETRY_TEXT;

  readonly loadingText = LOADER_LOADING_TEXT;

  readonly defaultErrorText = LOADER_DEFAULT_ERROR_MESSAGE;

  constructor(private readonly domSanitizer: DomSanitizer, private readonly matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'request_error',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/request-error.svg'),
    );
  }
}
