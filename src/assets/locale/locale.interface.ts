export interface LocaleInterface {
  PAGE: {
    HOME: {
      LBL: string;
      TTL: string;
    };
    ADMINISTRATION: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
      USERS: {
        LBL: string;
        TTL: string;
        SUCCESS_UPDATE: string;
        ERROR_UPDATE: string;
        EDIT: string;
        USERNAME: string;
        NAME: string;
        EMAIL: string;
        REGISTRATION_DATE: string;
        COUNTRY: string;
        ROLES: string;
      };
      ROLES: {
        LBL: string;
        TTL: string;
        DELETE_CONTENT: string;
        CREATE: string;
        EDIT: string;
        NAME: string;
        TYPE: string;
        PERMISSIONS: string;
        DESCRIPTION: string;
        SUCCESS_CREATE: string;
        ERROR_CREATE: string;
        SUCCESS_UPDATE: string;
        ERROR_UPDATE: string;
        SUCCESS_DELETE: string;
        ERROR_DELETE: string;
      };
      PERMISSIONS: {
        LBL: string;
        TTL: string;
      };
    };
    ABOUT: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    CONTACTS: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    CONTRIBUTING: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    DEVBLOG: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    DOWNLOAD: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    FAQ: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    LINKS: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    NEWS: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    MEDIA: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
    SERVERS: {
      LBL: string;
      TTL: string;
      DESCRIPTION: string;
    };
  };
  authorize: {
    recoverAccount: {
      desc: string;
      desc_Title: string;
      page_Title: string;
      page_Hint: string;
      userName: string;
      recover: string;
      signIn: string;
    };
    signIn: {
      desc: string;
      desc_Title: string;
      page_Title: string;
      signUp: string;
      signUp_Hint_1: string;
      signUp_Hint_2: string;
      userName: string;
      password: string;
      signIn: string;
      recoverAccount: string;
    };
    signUp: {
      desc: string;
      desc_Title: string;
      page_Title: string;
      signIn: string;
      signIn_Hint: string;
      userName: string;
      password: string;
      signUp: string;
    };
  };
  COMMON: {
    GRID_TOTAL_ITEMS_LEGEND: string;
    BUTTON: {
      YES: string;
      NO: string;
      CANCEL: string;
      CREATE: string;
      UPDATE: string;
    };
    MODAL: {
      CONFIRM: string;
    };
  };

  locale: {
    us: string;
    ru: string;
  };
}
