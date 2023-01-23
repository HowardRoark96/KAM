import { ChangeDetectionStrategy, Component } from '@angular/core';

const POSTS_DATA = [
  {
    id: '1',
    category: 'News',
    title: 'Knights Province – Alpha 11',
    dateCreated: 'June 22, 2020',
    dateUpdated: 'June 22, 2020',
    createdBy: 'Testa',
    updatedBy: 'Testa',
    text:
      `Я рад сообщить, что сегодня выходит Knights Province Alpha 11, которую можно загрузить с игрового сайта` +
      ` — <a mat-button href="http://knightsprovince.com/" target="_blank">Knights Province Alpha 11</a>.` +
      `<br/>Там же более подробно описаны новые функции.` +
      `<br/>Вкратце: башни с людьми, возводимые заборы, настоящий туман войны, рекорды миссий, возврат товаров при сносе домов, новые музыкальные и графические активы и многое другое!`,

    headerImg: 'assets/img/img1.png',
    commentCount: 1,
  },
  {
    id: '2',
    category: 'News',
    title: 'Knights Province – Alpha 11',
    dateCreated: 'June 22, 2020',
    dateUpdated: 'June 22, 2020',
    createdBy: 'Testa',
    updatedBy: 'Testa',
    text:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.`,
    headerImg: 'assets/img/img2.png',
    commentCount: 132,
  },
  {
    id: '3',
    category: 'News',
    title: 'Knights Province – Alpha 11',
    dateCreated: 'June 22, 2020',
    dateUpdated: 'June 22, 2020',
    createdBy: 'Testa',
    updatedBy: 'Testa',
    text:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.` +
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias dolor exercitationem facere facilis libero modi nesciunt quam quas repudiandae? Amet assumenda aut earum esse excepturi necessitatibus quod reiciendis voluptate.`,
    headerImg: 'assets/img/img3.png',
    commentCount: 0,
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  posts = POSTS_DATA;
}
