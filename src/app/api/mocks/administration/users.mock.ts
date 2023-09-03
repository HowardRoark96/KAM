import { RoleType, UserDto } from '../../model/administration';
import { CountryCodeType } from '@api/model';
import { PermissionsMock } from '@api/mocks';

export const UsersMock: UserDto[] = [
  {
    id: 1,
    username: 'Administrator',
    name: 'Administrator',
    email: 'kam-remake@email.com',
    registrationDate: '21.05.2023',
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
