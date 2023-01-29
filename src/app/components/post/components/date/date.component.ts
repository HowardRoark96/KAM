import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {
  @Input() set date(value: string) {
    if (value) this._date = moment(new Date(value));
    this.setProps();
  }

  _date = moment(new Date());

  year = '';

  month = '';

  day = '';

  setProps() {
    this.year = this._date.format('YYYY');
    this.month = this._date.format('MMM');
    this.day = this._date.format('DD');
  }
}
