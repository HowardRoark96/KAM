import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from '@customTypes/nullable.type';
import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button/button.component';
import { Params } from '@angular/router';
import { LinkTarget } from '@utils/types';
import { finalize, isObservable, Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label: Nullable<string>;
  @Input() type: NzButtonType = 'default';
  @Input() btnClass: Nullable<string | string[] | Set<string> | { [key: string]: unknown }>;
  @Input() size: NzButtonSize = 'default';
  @Input() shape: NzButtonShape = null;
  @Input() block: Nullable<boolean>;
  @Input() danger: Nullable<boolean>;
  @Input() isDisabled: Nullable<boolean>;
  @Input() leftIcon: Nullable<string>;
  @Input() rightIcon: Nullable<string>;
  @Input() theme: 'fill' | 'outline' | 'twotone' = 'outline';
  @Input() twotoneColor?: string;
  @Input() action$: Nullable<() => Nullable<Observable<unknown> | void>>;
  /* Link props */
  @Input() linkTarget: LinkTarget = '_self';
  @Input() link: Nullable<Array<number | string | undefined> | string | null>;
  @Input() queryParams: Nullable<Params>;
  @Input() fragment?: string;

  isLoading = false;

  actionCallback$: Nullable<Observable<unknown>>;

  onClick() {
    const actionResult$ = this.action$?.();
    if (!isObservable(actionResult$)) return;
    this.isLoading = true;
    this.actionCallback$ = actionResult$.pipe(
      finalize(() => {
        this.actionCallback$ = null;
        this.isLoading = false;
        // this.cdr.markForCheck();
      }),
    );
  }
}
