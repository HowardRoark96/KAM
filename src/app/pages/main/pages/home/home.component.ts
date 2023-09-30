import { ChangeDetectionStrategy, Component } from '@angular/core';

const PAGE_CARD_DATA = [
  {
    title: 'PAGE.NEWS.LBL',
    titleIcon: 'solution',
    description: 'PAGE.NEWS.DESCRIPTION',
    link: ['/news'],
  },
  {
    title: 'PAGE.ABOUT.LBL',
    titleIcon: 'file-search',
    description: 'PAGE.ABOUT.DESCRIPTION',
    link: ['/about'],
  },
  {
    title: 'PAGE.MEDIA.LBL',
    titleIcon: 'customer-service',
    description: 'PAGE.MEDIA.DESCRIPTION',
    link: ['/media'],
  },
  {
    title: 'PAGE.FAQ.LBL',
    titleIcon: 'bulb',
    description: 'PAGE.FAQ.DESCRIPTION',
    link: ['/faq'],
  },
  {
    title: 'PAGE.DOWNLOAD.LBL',
    titleIcon: 'download',
    description: 'PAGE.DOWNLOAD.DESCRIPTION',
    link: ['/download'],
  },
  {
    title: 'PAGE.CONTRIBUTING.LBL',
    titleIcon: 'team',
    description: 'PAGE.CONTRIBUTING.DESCRIPTION',
    link: ['/contributing'],
  },
  {
    title: 'PAGE.LINKS.LBL',
    titleIcon: 'link',
    description: 'PAGE.LINKS.DESCRIPTION',
    link: ['/links'],
  },
  {
    title: 'PAGE.CONTACTS.LBL',
    titleIcon: 'contacts',
    description: 'PAGE.CONTACTS.DESCRIPTION',
    link: ['/contact'],
  },
  {
    title: 'PAGE.SERVERS.LBL',
    titleIcon: 'database',
    description: 'PAGE.SERVERS.DESCRIPTION',
    link: ['/servers'],
  },
  {
    title: 'PAGE.DEVBLOG.LBL',
    titleIcon: 'fork',
    description: 'PAGE.DEVBLOG.DESCRIPTION',
    link: ['/devblog'],
  },
  {
    title: 'PAGE.ADMINISTRATION.LBL',
    titleIcon: 'setting',
    description: 'PAGE.ADMINISTRATION.DESCRIPTION',
    link: ['/administration'],
  },
  {
    title: 'PAGE.PROFILE.LBL',
    titleIcon: 'user',
    description: 'PAGE.PROFILE.DESCRIPTION',
    link: ['/profile', 7],
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly PAGE_CARD_DATA = PAGE_CARD_DATA;
}
