import { LocaleInterface } from './locale.interface';

export const LocaleEn: LocaleInterface = {
  PAGE: {
    ADMINISTRATION: {
      LBL: 'Administration',
      TTL: 'Administration page',
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
    },
    CONTACTS: {
      LBL: 'Contacts',
      TTL: 'Contacts page',
    },
    CONTRIBUTING: {
      LBL: 'Contributing',
      TTL: 'Contributing page',
    },
    DEVBLOG: {
      LBL: 'Devblog',
      TTL: 'Devblog page',
    },
    DOWNLOAD: {
      LBL: 'Download',
      TTL: 'Download page',
    },
    FAQ: {
      LBL: 'FAQ',
      TTL: 'FAQ page',
    },
    LINKS: {
      LBL: 'Links',
      TTL: 'Links page',
    },
    HOME: {
      LBL: 'Home',
      TTL: 'Home page',
    },
    MEDIA: {
      LBL: 'Media',
      TTL: 'Media page',
    },
    SERVERS: {
      LBL: 'Servers',
      TTL: 'Servers page',
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
