export const PermissionCodeType = {
  'ADMINISTRATION.READ': 'ADMINISTRATION.READ',

  'PERMISSIONS.READ': 'PERMISSIONS.READ',
  'PERMISSIONS.EDIT': 'PERMISSIONS.EDIT',

  'ROLES.READ': 'ROLES.READ',
  'ROLES.EDIT': 'ROLES.EDIT',

  'USERS.READ': 'USERS.READ',
  'USERS.EDIT': 'USERS.EDIT',

  'HOME.READ': 'HOME.READ',
  'HOME.EDIT': 'HOME.EDIT',
  'HOME.EDIT_SELF': 'HOME.EDIT_SELF',
  'HOME.CREATE': 'HOME.CREATE',
  'HOME.DELETE': 'HOME.DELETE',
  'HOME.DELETE_SELF': 'HOME.DELETE_SELF',
  'HOME.COMMENT': 'HOME.COMMENT',
  'HOME.RATE': 'HOME.RATE',

  'ABOUT.READ': 'ABOUT.READ',
  'ABOUT.EDIT': 'ABOUT.EDIT',

  'MEDIA.READ': 'MEDIA.READ',
  'MEDIA.EDIT': 'MEDIA.EDIT',

  'FAQ.READ': 'FAQ.READ',
  'FAQ.EDIT': 'FAQ.EDIT',

  'DOWNLOAD.READ': 'DOWNLOAD.READ',
  'DOWNLOAD.EDIT': 'DOWNLOAD.EDIT',

  'CONTRIBUTING.READ': 'CONTRIBUTING.READ',
  'CONTRIBUTING.EDIT': 'CONTRIBUTING.EDIT',

  'LINKS.READ': 'LINKS.READ',
  'LINKS.EDIT': 'LINKS.EDIT',

  'CONTACTS.READ': 'CONTACTS.READ',
  'CONTACTS.EDIT': 'CONTACTS.EDIT',

  'SERVERS.READ': 'SERVERS.READ',
  'SERVERS.EDIT': 'SERVERS.EDIT',

  'DEVBLOG.READ': 'DEVBLOG.READ',
  'DEVBLOG.EDIT': 'DEVBLOG.EDIT',
};

export type PermissionCodeType = (typeof PermissionCodeType)[keyof typeof PermissionCodeType];