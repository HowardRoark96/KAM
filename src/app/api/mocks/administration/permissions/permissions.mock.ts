import { PermissionCodeType, PermissionDto } from '@api/model';

export const PermissionsMock: PermissionDto[] = [
  {
    id: 1,
    code: PermissionCodeType['ADMINISTRATION.READ'],
    description: {
      ru: 'Раздел "Администрирование". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 2,
    code: PermissionCodeType['PERMISSIONS.READ'],
    description: {
      ru: 'Раздел "Права". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 3,
    code: PermissionCodeType['PERMISSIONS.EDIT'],
    description: {
      ru: 'Раздел "Права". Редактирование прав',
      us: 'string',
    },
  },
  {
    id: 4,
    code: PermissionCodeType['ROLES.READ'],
    description: {
      ru: 'Раздел "Роли". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 5,
    code: PermissionCodeType['ROLES.EDIT'],
    description: {
      ru: 'Раздел "Роли". Редактирование ролей',
      us: 'string',
    },
  },
  {
    id: 6,
    code: PermissionCodeType['USERS.READ'],
    description: {
      ru: 'Раздел "Пользователи". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 7,
    code: PermissionCodeType['USERS.EDIT'],
    description: {
      ru: 'Раздел "Пользователи". Редактирование пользователей',
      us: 'string',
    },
  },
  {
    id: 8,
    code: PermissionCodeType['HOME.READ'],
    description: {
      ru: 'Раздел "Главная". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 9,
    code: PermissionCodeType['HOME.EDIT'],
    description: {
      ru: 'Раздел "Главная". Редактирование статей',
      us: 'string',
    },
  },
  {
    id: 10,
    code: PermissionCodeType['HOME.EDIT_SELF'],
    description: {
      ru: 'Раздел "Главная". Редактирование своих статей',
      us: 'string',
    },
  },
  {
    id: 11,
    code: PermissionCodeType['HOME.CREATE'],
    description: {
      ru: 'Раздел "Главная". Создание статей',
      us: 'string',
    },
  },
  {
    id: 121,
    code: PermissionCodeType['HOME.DELETE'],
    description: {
      ru: 'Раздел "Главная". Удаление статей',
      us: 'string',
    },
  },
  {
    id: 122,
    code: PermissionCodeType['HOME.DELETE_SELF'],
    description: {
      ru: 'Раздел "Главная". Удаление своих статей',
      us: 'string',
    },
  },
  {
    id: 13,
    code: PermissionCodeType['HOME.COMMENT'],
    description: {
      ru: 'Раздел "Главная". Комментирование статей и других комментариев',
      us: 'string',
    },
  },
  {
    id: 14,
    code: PermissionCodeType['HOME.EVALUATE'],
    description: {
      ru: 'Раздел "Главная". Оценка статей и комментариев',
      us: 'string',
    },
  },
  {
    id: 15,
    code: PermissionCodeType['ABOUT.READ'],
    description: {
      ru: 'Раздел "О проекте". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 16,
    code: PermissionCodeType['ABOUT.EDIT'],
    description: {
      ru: 'Раздел "О проекте". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 17,
    code: PermissionCodeType['MEDIA.READ'],
    description: {
      ru: 'Раздел "Медиа". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 18,
    code: PermissionCodeType['MEDIA.EDIT'],
    description: {
      ru: 'Раздел "Медиа". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 19,
    code: PermissionCodeType['FAQ.READ'],
    description: {
      ru: 'Раздел "FAQ". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 20,
    code: PermissionCodeType['FAQ.EDIT'],
    description: {
      ru: 'Раздел "FAQ". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 21,
    code: PermissionCodeType['DOWNLOAD.READ'],
    description: {
      ru: 'Раздел "Загрузки". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 22,
    code: PermissionCodeType['DOWNLOAD.EDIT'],
    description: {
      ru: 'Раздел "Загрузки". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 23,
    code: PermissionCodeType['CONTRIBUTING.READ'],
    description: {
      ru: 'Раздел "Помощь проекту". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 24,
    code: PermissionCodeType['CONTRIBUTING.EDIT'],
    description: {
      ru: 'Раздел "Помощь проекту". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 25,
    code: PermissionCodeType['LINKS.READ'],
    description: {
      ru: 'Раздел "Полезные ссылки". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 26,
    code: PermissionCodeType['LINKS.EDIT'],
    description: {
      ru: 'Раздел "Помощь проекту". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 27,
    code: PermissionCodeType['CONTACTS.READ'],
    description: {
      ru: 'Раздел "Контакты". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 28,
    code: PermissionCodeType['CONTACTS.EDIT'],
    description: {
      ru: 'Раздел "Контакты". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 29,
    code: PermissionCodeType['SERVERS.READ'],
    description: {
      ru: 'Раздел "Серверы". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 30,
    code: PermissionCodeType['SERVERS.EDIT'],
    description: {
      ru: 'Раздел "Серверы". Редактирование раздела',
      us: 'string',
    },
  },
  {
    id: 31,
    code: PermissionCodeType['DEVBLOG.READ'],
    description: {
      ru: 'Раздел "Разработка". Просмотр раздела',
      us: 'string',
    },
  },
  {
    id: 32,
    code: PermissionCodeType['DEVBLOG.EDIT'],
    description: {
      ru: 'Раздел "Разработка". Редактирование раздела',
      us: 'string',
    },
  },
];
