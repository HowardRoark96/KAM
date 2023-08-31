import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ReactiveComponent } from '@widgets/reactive-fields/classes/reactive-component';
import { Nullable } from '@customTypes/nullable.type';
import {
  NzFilterOptionType,
  NzSelectItemInterface,
  NzSelectModeType,
  NzSelectPlacementType,
} from 'ng-zorro-antd/select/select.types';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SelectOption } from '@utils/interfaces/select-option';

@Directive()
export abstract class ReactiveSelectionComponent<T = unknown> extends ReactiveComponent {
  @Input() isAutoClearSearch = false;
  @Input() isAllowClear = true;
  @Input() isBackdrop = false;
  @Input() isBorderless = false;
  @Input() isOpen = false;
  @Input() isDropdownWidthAsSelect = true;
  @Input() isServerSearch = false;
  @Input() isShowArrow = true;
  @Input() isShowSearch = false;
  @Input() isLoading = false;
  @Input() isSelectOnTab = false;

  @Input() dropdownClassName: Nullable<string | string[]>;
  @Input() dropdownStyle: Nullable<{ [key: string]: string }>;

  @Input() filterOptionFn: NzFilterOptionType = (v: string, option: NzSelectItemInterface) =>
    !!option.nzLabel?.toString().toLowerCase().includes(v);
  @Input() maxMultipleCount = Infinity;
  @Input() removeIcon: Nullable<TemplateRef<NzSafeAny>>;
  @Input() clearIcon: Nullable<TemplateRef<NzSafeAny>>;
  @Input() menuItemSelectedIconIcon: Nullable<TemplateRef<NzSafeAny>>;
  @Input() tokenSeparators: string[] = [];
  @Input() mode: NzSelectModeType = 'default';
  @Input() notFoundContent?: string | TemplateRef<void>;
  @Input() placement: NzSelectPlacementType = 'bottomLeft';

  @Input() options: Nullable<SelectOption<T>[]>;
  @Input() customTemplate: Nullable<TemplateRef<{ $implicit: NzSelectItemInterface }>>;
  @Input() maxTagPlaceholder: Nullable<TemplateRef<{ $implicit: NzSafeAny[] }>>;

  @Input() maxTagCount = 5;
  @Input() optionHeightPx = 32;
  @Input() optionOverflowSize = 8;

  @Output() openChanged = new EventEmitter();
  @Output() scrollToBottom = new EventEmitter();
  @Output() searchChanged = new EventEmitter();
}
