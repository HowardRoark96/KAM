import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getNewsMockedData } from '@utils/mocked-data/news.constant';
import { NewsDataInterface } from './widgets/news-card/news-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  MOCKED_DATA_NEWS: NewsDataInterface[] = getNewsMockedData().data;
}
