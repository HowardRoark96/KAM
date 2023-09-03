import { MockedData } from '@utils/mocked-data/interfaces';
import { User } from '../../pages/main/pages/news/widgets/news-card/news-card.component';

export const getUserMockedData = (): MockedData<User> => {
  return {
    data: {
      email: 'developer@email.com',
      login: 'Developer',
      avatar: 'https://images.assetsdelivery.com/compings_v2/tratong/tratong1611/tratong161100154.jpg',
    },
  };
};
