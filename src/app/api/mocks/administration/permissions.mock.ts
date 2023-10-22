import { PermissionCodeType, PermissionDto } from '../../model';

export const PermissionsMock: PermissionDto[] = [
  {
    id: 1,
    code: PermissionCodeType['ADMINISTRATION.READ'],
    description: {
      ru: 'Раздел "Администрирование". Просмотр раздела',
      us: 'Section "Administration". Section view',
    },
  },
  {
    id: 2,
    code: PermissionCodeType['PERMISSIONS.READ'],
    description: {
      ru: 'Раздел "Права". Просмотр раздела',
      us: 'Section "Permissions". Section view',
    },
  },
  {
    id: 3,
    code: PermissionCodeType['PERMISSIONS.EDIT'],
    description: {
      ru: 'Раздел "Права". Редактирование прав',
      us: 'Section "Permissions". Editing permissions',
    },
  },
  {
    id: 4,
    code: PermissionCodeType['ROLES.READ'],
    description: {
      ru: 'Раздел "Роли". Просмотр раздела',
      us: 'Section "Roles". Section view',
    },
  },
  {
    id: 5,
    code: PermissionCodeType['ROLES.EDIT'],
    description: {
      ru: 'Раздел "Роли". Редактирование ролей',
      us: 'Section "Users". Editing roles',
    },
  },
  {
    id: 6,
    code: PermissionCodeType['USERS.READ'],
    description: {
      ru: 'Раздел "Пользователи". Просмотр раздела',
      us: 'Section "Users". Section view',
    },
  },
  {
    id: 7,
    code: PermissionCodeType['USERS.EDIT'],
    description: {
      ru: 'Раздел "Пользователи". Редактирование пользователей',
      us: 'Section "Users". Editing users',
    },
  },
  {
    id: 8,
    code: PermissionCodeType['HOME.READ'],
    description: {
      ru: 'Раздел "Главная". Просмотр раздела',
      us: 'Section "Home". Section view',
    },
  },
  {
    id: 9,
    code: PermissionCodeType['HOME.EDIT'],
    description: {
      ru: 'Раздел "Главная". Редактирование статей',
      us: 'Section "Home". Editing articles',
    },
  },
  {
    id: 10,
    code: PermissionCodeType['HOME.EDIT_SELF'],
    description: {
      ru: 'Раздел "Главная". Редактирование своих статей',
      us: 'Section "Home". Editing your articles',
    },
  },
  {
    id: 11,
    code: PermissionCodeType['HOME.CREATE'],
    description: {
      ru: 'Раздел "Главная". Создание статей',
      us: 'Section "Home". Creating articles',
    },
  },
  {
    id: 121,
    code: PermissionCodeType['HOME.DELETE'],
    description: {
      ru: 'Раздел "Главная". Удаление статей',
      us: 'Section "Home". Deleting articles',
    },
  },
  {
    id: 122,
    code: PermissionCodeType['HOME.DELETE_SELF'],
    description: {
      ru: 'Раздел "Главная". Удаление своих статей',
      us: 'Section "Home". Deleting your articles',
    },
  },
  {
    id: 13,
    code: PermissionCodeType['HOME.COMMENT'],
    description: {
      ru: 'Раздел "Главная". Комментирование статей и других комментариев',
      us: 'Section "Home". Commenting articles and other comments',
    },
  },
  {
    id: 14,
    code: PermissionCodeType['HOME.RATE'],
    description: {
      ru: 'Раздел "Главная". Оценка статей и комментариев',
      us: 'Section "Home". Rating articles and comments',
    },
  },
  {
    id: 15,
    code: PermissionCodeType['ABOUT.READ'],
    description: {
      ru: 'Раздел "О проекте". Просмотр раздела',
      us: 'Section "About". Section view',
    },
  },
  {
    id: 16,
    code: PermissionCodeType['ABOUT.EDIT'],
    description: {
      ru: 'Раздел "О проекте". Редактирование раздела',
      us: 'Section "About". Section editing',
    },
  },
  {
    id: 17,
    code: PermissionCodeType['MEDIA.READ'],
    description: {
      ru: 'Раздел "Медиа". Просмотр раздела',
      us: 'Section "Media". Section view',
    },
  },
  {
    id: 18,
    code: PermissionCodeType['MEDIA.EDIT'],
    description: {
      ru: 'Раздел "Медиа". Редактирование раздела',
      us: 'Section "Media". Section editing',
    },
  },
  {
    id: 19,
    code: PermissionCodeType['FAQ.READ'],
    description: {
      ru: 'Раздел "FAQ". Просмотр раздела',
      us: 'Section "FAQ". Section view',
    },
  },
  {
    id: 20,
    code: PermissionCodeType['FAQ.EDIT'],
    description: {
      ru: 'Раздел "FAQ". Редактирование раздела',
      us: 'Section "FAQ". Section editing',
    },
  },
  {
    id: 21,
    code: PermissionCodeType['DOWNLOAD.READ'],
    description: {
      ru: 'Раздел "Загрузки". Просмотр раздела',
      us: 'Section "Download". Section view',
    },
  },
  {
    id: 22,
    code: PermissionCodeType['DOWNLOAD.EDIT'],
    description: {
      ru: 'Раздел "Загрузки". Редактирование раздела',
      us: 'Section "Download". Section editing',
    },
  },
  {
    id: 23,
    code: PermissionCodeType['CONTRIBUTING.READ'],
    description: {
      ru: 'Раздел "Помощь проекту". Просмотр раздела',
      us: 'Section "Contributing". Section view',
    },
  },
  {
    id: 24,
    code: PermissionCodeType['CONTRIBUTING.EDIT'],
    description: {
      ru: 'Раздел "Помощь проекту". Редактирование раздела',
      us: 'Section "Contributing". Section editing',
    },
  },
  {
    id: 25,
    code: PermissionCodeType['LINKS.READ'],
    description: {
      ru: 'Раздел "Полезные ссылки". Просмотр раздела',
      us: 'Section "Links". Section view',
    },
  },
  {
    id: 26,
    code: PermissionCodeType['LINKS.EDIT'],
    description: {
      ru: 'Раздел "Полезные ссылки". Редактирование раздела',
      us: 'Section "Links". Section editing',
    },
  },
  {
    id: 27,
    code: PermissionCodeType['CONTACTS.READ'],
    description: {
      ru: 'Раздел "Контакты". Просмотр раздела',
      us: 'Section "Contacts". Section view',
    },
  },
  {
    id: 28,
    code: PermissionCodeType['CONTACTS.EDIT'],
    description: {
      ru: 'Раздел "Контакты". Редактирование раздела',
      us: 'Section "Contacts". Section editing',
    },
  },
  {
    id: 29,
    code: PermissionCodeType['SERVERS.READ'],
    description: {
      ru: 'Раздел "Серверы". Просмотр раздела',
      us: 'Section "Servers". Section view',
    },
  },
  {
    id: 30,
    code: PermissionCodeType['SERVERS.EDIT'],
    description: {
      ru: 'Раздел "Серверы". Редактирование раздела',
      us: 'Section "Servers". Section editing',
    },
  },
  {
    id: 31,
    code: PermissionCodeType['DEVBLOG.READ'],
    description: {
      ru: 'Раздел "Разработка". Просмотр раздела',
      us: 'Section "Devblog". Section view',
    },
  },
  {
    id: 32,
    code: PermissionCodeType['DEVBLOG.EDIT'],
    description: {
      ru: 'Раздел "Разработка". Редактирование раздела',
      us: 'Section "Devblog". Section editing',
    },
  },
];
