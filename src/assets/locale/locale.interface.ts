export interface LocaleInterface {
  page: {
    about: string;
    contact: string;
    contributing: string;
    devblog: string;
    download: string;
    faq: string;
    home: string;
    links: string;
    media: string;
    servers: string;
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

  locale: {
    us: string;
    ru: string;
  };
}
