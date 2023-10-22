import { RoleType, UserDto } from '../../model';
import { CountryCodeType, SexType } from '@api/model';
import { PermissionsMock } from '@api/mocks';

export const UsersMock: UserDto[] = [
  {
    id: 1,
    username: 'Administrator',
    name: 'Administrator',
    email: 'kam-remake@email.com',
    registrationDate: '21.05.2023',
    avatar: 'https://img.kupigolos.ru/hero/5ccef4e39e565.jpg?p=bh&s=84e8b70c0a3715108e5de38a3561531a',
    roles: [
      {
        id: 1,
        name: 'ADMINISTRATOR',
        type: RoleType.SYSTEM,
        permissions: PermissionsMock,
        description: {
          ru: 'Полный набор прав',
          us: 'Full package of permissions',
        },
      },
    ],
  },
  {
    id: 2,
    username: 'chmoki1991',
    name: 'Jesse Prescott',
    email: 'chmoki1991@email.com',
    country: CountryCodeType.gs,
    registrationDate: '04.10.2022',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ensdZ1Ec9npKIi2c4WtrZ_kmms7HZu8ygu6jVsw80czUiGZHd5vbG2y-0nb-tsnXiqw&usqp=CAU',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
    ],
  },
  {
    id: 3,
    username: 'Liernke',
    name: 'Warren Cruz',
    email: 'liernke@email.com',
    country: CountryCodeType.co,
    registrationDate: '17.12.2022',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKmxpkL5S5L3muC71P90VvBqwPdnlfqQ2QzkazTzqpAi9dT_woJUgzfUuzZyJ9T0mMn0&usqp=CAU',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
    ],
  },
  {
    id: 4,
    username: 'Terolw',
    name: 'Warren Cruz',
    email: 'terolw@email.com',
    country: CountryCodeType.sn,
    registrationDate: '06.02.2023',
    avatar:
      'https://www.kornferry.com/content/kornferry-v2/en/about-us/consultants/warren-d-cruz/_jcr_content/image.coreimg.jpeg/1635442038995/warren-d-cruz-web.jpeg',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
      {
        id: 14,
        name: 'NEWS WRITER',
        type: RoleType.USER,
        permissions: [],
        description: {
          ru: 'Создание, редактирование и удаление новостей в разделе "Главная"',
          us: 'Creating, editing and deleting news in "Home" section',
        },
      },
    ],
  },
  {
    id: 5,
    username: 'ПЕТР 1',
    name: 'Петр Великий',
    email: 'petrgreater@email.com',
    country: CountryCodeType.ru,
    registrationDate: '11.03.2023',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
      {
        id: 15,
        name: 'ARTICLE WRITER',
        type: RoleType.USER,
        permissions: [],
        description: {
          ru: 'Создание, редактирование и удаление статей в разделе "Главная"',
          us: 'Creating, editing and deleting articles in "Home" section',
        },
      },
    ],
  },
  {
    id: 6,
    username: '斯洛恩',
    name: '西尼波',
    email: 'sinpo@email.com',
    country: CountryCodeType.cn,
    registrationDate: '01.09.2023',
    avatar: 'https://image.agentm.tw/images/artist/e3bf321a-b7f6-48ad-a20f-4d818d253431.jpg',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
    ],
  },
  {
    id: 7,
    username: 'Cyrus Smith',
    name: 'Vladislav Safarov',
    email: 'vladsafarov46@gmail.com',
    country: CountryCodeType.ru,
    registrationDate: '01.09.2023',
    age: 27,
    sex: SexType.MALE,
    about: 'Сколько человеку лет, столько человеку и зим',
    avatar: 'https://avatars.cloudflare.steamstatic.com/d837cc936e6093c765a3349e726c4d09a2cfb3c7_full.jpg',
    roles: [
      {
        id: 13,
        name: 'USER',
        type: RoleType.SYSTEM,
        permissions: [],
        description: {
          ru: 'Права на чтение всех разделов,кроме "Администрирование". Редактирование, создание, удаление своих комментариев в разделе "Главная"',
          us: 'Read-only permissions to all sections except "Administration". Editing, creating, deleting owner comments in the "Home" section',
        },
      },
    ],
  },
];
