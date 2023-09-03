import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getNewsMockedData } from '@utils/mocked-data/news.constant';
import { NewsDataInterface } from './widgets/news-card/news-card.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalCreateNewsComponent } from './widgets/modal-create-news';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  MOCKED_DATA_NEWS: NewsDataInterface[] = getNewsMockedData().data;

  getData$ = of(this.MOCKED_DATA_NEWS).pipe(delay(5000));

  constructor(private readonly modalService: NzModalService) {}

  toData = (value: unknown) => value as NewsDataInterface[];

  createNews$ = () => {
    const modal = this.modalService.create({
      nzContent: ModalCreateNewsComponent,
      nzWidth: '75%',
      nzMaskClosable: false,
      nzCentered: true,
    });

    return modal.afterClose.pipe(tap((news) => this.MOCKED_DATA_NEWS.push(news)));
  };
}
