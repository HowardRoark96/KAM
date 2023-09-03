import { LocaleInterface } from './locale.interface';

export const LocaleEn: LocaleInterface = {
  PAGE: {
    ADMINISTRATION: {
      LBL: 'Administration',
      TTL: 'Administration page',
      DESCRIPTION: 'The section contains information about users, roles and permissions.',
      USERS: {
        LBL: 'Users',
        TTL: 'Users page',
        SUCCESS_UPDATE: 'User updated',
        ERROR_UPDATE: 'User update failed',
        EDIT: 'Edit user',
        USERNAME: 'Username',
        NAME: 'Name',
        EMAIL: 'Email',
        REGISTRATION_DATE: 'Registration date',
        COUNTRY: 'User country',
        ROLES: 'User roles',
      },
      ROLES: {
        LBL: 'Roles',
        TTL: 'Roles page',
        DELETE_CONTENT: 'Are you sure delete this role?',
        CREATE: 'Create role',
        EDIT: 'Edit role',
        NAME: 'Role name',
        TYPE: 'Role type',
        PERMISSIONS: 'Role permissions',
        DESCRIPTION: 'Role description',
        SUCCESS_CREATE: 'Role created',
        ERROR_CREATE: 'Role create failed',
        SUCCESS_UPDATE: 'Role updated',
        ERROR_UPDATE: 'Role update failed',
        SUCCESS_DELETE: 'Role deleted',
        ERROR_DELETE: 'Role delete failed',
      },
      PERMISSIONS: {
        LBL: 'Permissions',
        TTL: 'Permissions page',
      },
    },
    ABOUT: {
      LBL: 'About',
      TTL: 'About page',
      DESCRIPTION:
        'The section on about what "Knights and Merchants Remake" project is all about, project goals and other information.',
    },
    CONTACTS: {
      LBL: 'Contacts',
      TTL: 'Contacts page',
      DESCRIPTION: 'Here you can ask your questions, feedback, bug reports, etc.',
    },
    CONTRIBUTING: {
      LBL: 'Contributing',
      TTL: 'Contributing page',
      DESCRIPTION: 'In this section you can find how you can help the project.',
    },
    DEVBLOG: {
      LBL: 'Devblog',
      TTL: 'Devblog page',
      DESCRIPTION: 'The section contains information about current development.',
    },
    DOWNLOAD: {
      LBL: 'Download',
      TTL: 'Download page',
      DESCRIPTION: 'The section contains information about how to install "Knights and Merchants Remake".',
    },
    FAQ: {
      LBL: 'FAQ',
      TTL: 'FAQ page',
      DESCRIPTION: 'The section that publishes answers to frequently asked questions from users.',
    },
    LINKS: {
      LBL: 'Links',
      TTL: 'Links page',
      DESCRIPTION: 'In this section you can find useful links.',
    },
    NEWS: {
      LBL: 'News',
      TTL: 'News page',
      DESCRIPTION:
        'The section that publishes news about past and present events, announcements, information about the game, etc.',
    },
    MEDIA: {
      LBL: 'Media',
      TTL: 'Media page',
      DESCRIPTION: 'YouTube "Knights and Merchants Remake" channel',
    },
    SERVERS: {
      LBL: 'Servers',
      TTL: 'Servers page',
      DESCRIPTION: 'The section contains information about active game servers at the moment, server statistics, etc.',
    },
  },
  authorize: {
    recoverAccount: {
      desc_Title: 'Welcome back!',
      desc: 'Get more information about the game mode, game servers, player statistics and much more!',
      page_Title: 'Recover account',
      page_Hint: 'Enter your username and you will receive a mail to recover your account.',
      userName: 'Username',
      recover: 'Recover',
      signIn: 'Remembered your password?',
    },
    signIn: {
      desc_Title: 'Welcome back!',
      desc: 'Get more information about the game mode, game servers, player statistics and much more!',
      page_Title: 'Log In',
      signUp: 'Create an account',
      signUp_Hint_1: "Don't have an account?",
      signUp_Hint_2: 'It will take less than a minute.',
      userName: 'Username',
      password: 'Password',
      signIn: 'Sign in',
      recoverAccount: 'Forget your password?',
    },
    signUp: {
      desc_Title: 'Welcome!',
      desc: 'Get more information about the game mode, game servers, player statistics and much more!',
      page_Title: 'Create account',
      signIn: 'Log in',
      signIn_Hint: 'Already have an account?',
      userName: 'Username',
      password: 'Password',
      signUp: 'Sign up',
    },
  },
  COMMON: {
    GRID_TOTAL_ITEMS_LEGEND: '{{from}}-{{to}} of {{items}}',
    BUTTON: {
      YES: 'Yes',
      NO: 'No',
      CANCEL: 'Cancel',
      CREATE: 'Create',
      UPDATE: 'Update',
    },
    MODAL: {
      CONFIRM: 'Confirmation',
    },
  },
  locale: {
    us: 'English',
    ru: 'Russian',
  },
};
