import { RoleDto, RoleType } from '../../model/administration';
import { PermissionsMock } from '../../mocks/administration';

export const RolesMock: RoleDto[] = [
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
  {
    id: 2,
    name: 'HOME EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Главная"',
      us: 'Full package of "Home" section permissions',
    },
  },
  {
    id: 3,
    name: 'ABOUT EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "О проекте"',
      us: 'Full package of "About" section permissions',
    },
  },
  {
    id: 4,
    name: 'MEDIA EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Медиа"',
      us: 'Full package of "Media" section permissions',
    },
  },
  {
    id: 5,
    name: 'FAQ EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "FAQ"',
      us: 'Full package of "FAQ" section permissions',
    },
  },
  {
    id: 6,
    name: 'DOWNLOAD EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Загрузки"',
      us: 'Full package of "Download" section permissions',
    },
  },
  {
    id: 7,
    name: 'CONTRIBUTING EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Помощь проекту"',
      us: 'Full package of "Contributing" section permissions',
    },
  },
  {
    id: 8,
    name: 'LINKS EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Полезные ссылки"',
      us: 'Full package of "Links" section permissions',
    },
  },
  {
    id: 9,
    name: 'CONTACTS EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Контакты"',
      us: 'Full package of "Contacts" section permissions',
    },
  },
  {
    id: 10,
    name: 'SERVERS EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Серверы"',
      us: 'Full package of "Servers" section permissions',
    },
  },
  {
    id: 11,
    name: 'DEVBLOG EDITOR',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Полный набор прав раздела "Разработка"',
      us: 'Full package of "Devblog" section permissions',
    },
  },
  {
    id: 12,
    name: 'GUEST',
    type: RoleType.SYSTEM,
    permissions: [],
    description: {
      ru: 'Права только на чтение всех разделов, кроме "Администрирование"',
      us: 'Read-only permissions to all sections except "Administration"',
    },
  },
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
];
