import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
import { Nullable } from '@customTypes/nullable.type';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { GridColumnsInterface, GridRowInterface, GridSettingsInterface } from './utils';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  @Input() settingValue!: GridSettingsInterface;
  @Input() headerData!: GridColumnsInterface[];
  @Input() listOfData: GridRowInterface[] = [];
  @Input() displayData: GridRowInterface[] = [];
  @Input() allChecked = false;
  @Input() indeterminate = false;
  @Input() fixedColumn = false;
  @Input() scrollX: string | null = null;
  @Input() scrollY: string | null = null;

  settingForm = new FormGroup({
    bordered: new FormControl<Nullable<boolean>>(null),
    loading: new FormControl<Nullable<boolean>>(null),
    pagination: new FormControl<Nullable<boolean>>(null),
    sizeChanger: new FormControl<Nullable<boolean>>(null),
    title: new FormControl<Nullable<string>>(null),
    header: new FormControl<Nullable<boolean>>(null),
    footer: new FormControl<Nullable<string>>(null),
    expandable: new FormControl<Nullable<boolean>>(null),
    checkbox: new FormControl<Nullable<boolean>>(null),
    fixHeader: new FormControl<Nullable<boolean>>(null),
    noResult: new FormControl<Nullable<boolean>>(null),
    ellipsis: new FormControl<Nullable<boolean>>(null),
    simple: new FormControl<Nullable<boolean>>(null),
    size: new FormControl<Nullable<NzTableSize>>(null),
    tableScroll: new FormControl<Nullable<string>>(null),
    tableLayout: new FormControl<Nullable<NzTableLayout>>(null),
    position: new FormControl<Nullable<NzTablePaginationPosition>>(null),
    paginationType: new FormControl<Nullable<NzTablePaginationType>>(null),
  });

  settingFormChanged$ = this.settingForm.valueChanges.pipe(
    tap((value) => (this.settingValue = value as GridSettingsInterface)),
  );

  tableScrollTypeChanged$ = this.settingForm.get('tableScroll')!.valueChanges.pipe(
    tap((scroll) => {
      this.fixedColumn = scroll === 'fixed';
      this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
    }),
  );

  fixHeaderTypeChanged$ = this.settingForm
    .get('fixHeader')!
    .valueChanges.pipe(tap((fixed) => (this.scrollY = fixed ? '240px' : null)));

  noResultTypeChanged$ = this.settingForm.get('noResult')!.valueChanges.pipe(
    tap((empty) => {
      if (empty) this.listOfData = [];
    }),
  );

  ngOnInit() {
    if (!this.listOfData || this.listOfData.length === 0) this.settingForm.patchValue({ noResult: true });
    this.settingForm.patchValue(this.settingValue);
  }

  // currentPageDataChange($event: readonly GridRowInterface[]) {
  //   // this.displayData = $event;
  //   // this.refreshStatus();
  // }

  toGridData = (data: unknown[]) => data as GridRowInterface[];

  // refreshStatus() {
  //   const validData = this.displayData.filter((value) => !value.disabled);
  //   const allChecked = validData.length > 0 && validData.every((value) => value.checked === true);
  //   const allUnChecked = validData.every((value) => !value.checked);
  //   this.allChecked = allChecked;
  //   this.indeterminate = !allChecked && !allUnChecked;
  // }

  // checkAll(value: boolean) {
  //   this.displayData.forEach((data) => {
  //     if (!data.disabled) data.checked = value;
  //   });
  //   this.refreshStatus();
  // }
}
