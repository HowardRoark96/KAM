export interface LocaleInterface {
  PAGE: {
    ADMINISTRATION: {
      LBL: string;
      TTL: string;
      USERS: {
        LBL: string;
        TTL: string;
      };
      ROLES: {
        LBL: string;
        TTL: string;
      };
      PERMISSIONS: {
        LBL: string;
        TTL: string;
      };
    };
    ABOUT: {
      LBL: string;
      TTL: string;
    };
    CONTACTS: {
      LBL: string;
      TTL: string;
    };
    CONTRIBUTING: {
      LBL: string;
      TTL: string;
    };
    DEVBLOG: {
      LBL: string;
      TTL: string;
    };
    DOWNLOAD: {
      LBL: string;
      TTL: string;
    };
    FAQ: {
      LBL: string;
      TTL: string;
    };
    LINKS: {
      LBL: string;
      TTL: string;
    };
    HOME: {
      LBL: string;
      TTL: string;
    };
    MEDIA: {
      LBL: string;
      TTL: string;
    };
    SERVERS: {
      LBL: string;
      TTL: string;
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
  };

  locale: {
    us: string;
    ru: string;
  };
}
