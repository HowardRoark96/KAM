import { MockedData } from '@utils/mocked-data/interfaces';
import { NewsDataInterface } from '../../pages/main/pages/news/widgets/news-card/news-card.component';
import { getUserMockedData } from '@utils/mocked-data/user.constant';
import { getCommentMockedData } from '@utils/mocked-data/comment.constant';

export const getNewsMockedData = (): MockedData<NewsDataInterface[]> => {
  return {
    data: [
      {
        title: 'Knights and Merchants Remake',
        time: '2023-01-17T03:24:00',
        contentTitle: 'DESCRIPTION',
        contentDescription:
          'The KaM Remake mod is an attempt to reinvigorate the original “Knights and Merchants: The Shattered Kingdom” strategy game. Our goals are to make it work on today’s computers and operating systems, implement a fully featured online multiplayer system, as well as to fix the many bugs in the game engine. To do this we have started from scratch, writing our own code for the game engine but still relying on many original resource files. We assume that you own the original KaM game, (the installer checks for it) otherwise you should buy it – it’s available in a number of online gaming stores.\n' +
          '\nThe KaM Remake executable is freeware and is built by enthusiasts. Applications used: Delphi 6, Delphi 7, FastMM4, Lazarus, OpenGL, OpenAL, zLib, PNGImage, MadExcept, libZPlay.',
        user: getUserMockedData().data,
        comments: getCommentMockedData().data,
      },
      {
        title: 'Knights and Merchants Remake',
        time: '2023-04-20T03:24:00',
        contentTitle: 'INSTALLATION',
        contentDescription:
          '1. Run the installer and follow the installation instructions.' +
          '\n2. The installer will also install the OpenAL audio drivers (oalinst.exe) if they are not detected. The latest version can be found on the official OpenAL page: https://connect.creativelabs.com/openal/default.aspx' +
          '\n3. The KaM Remake uses the OpenGL rendering engine, so you need to have OpenGL drivers installed as well. Visit your graphics card manufacturer site to get the latest drivers available.' +
          '\n4. Launch the mod – KaM_Remake.exe or from the Desktop/Start Menu if you chose to create shortcuts.',
        user: getUserMockedData().data,
        comments: [],
      },
      {
        title: 'Knights and Merchants Remake',
        time: '2023-01-17T03:24:00',
        contentTitle: 'SYSTEM REQUIREMENTS',
        contentDescription:
          'KaM Remake requires:\n' +
          '– Microsoft Windows 98, XP, Vista, 7, 8, 10;\n' +
          '– 500MHz or faster processor;\n' +
          '– 256MB or more of RAM;\n' +
          '– 3D graphics accelerator OpenGL 1.4 compliant;\n' +
          '– Sound card.',
        user: getUserMockedData().data,
        comments: [],
      },
    ],
  };
};
