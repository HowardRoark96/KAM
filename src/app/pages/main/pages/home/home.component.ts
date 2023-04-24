import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getNewsMockedData } from '@utils/mocked-data/news.constant';
import { NewsDataInterface } from './widgets/news-card/news-card.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalCreateNewsComponent } from './widgets/modal-create-news';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  MOCKED_DATA_NEWS: NewsDataInterface[] = getNewsMockedData().data;

  constructor(private readonly modalService: NzModalService) {}

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
