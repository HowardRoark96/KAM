import { formatDistance } from 'date-fns';
import { CommentDataInterface } from '@widgets/comment';
import { MockedData } from './interfaces';

export const getCommentMockedData = (): MockedData<CommentDataInterface[]> => {
  return {
    data: [
      {
        author: 'Han Solo',
        avatar: 'https://icon-library.com/images/han-solo-icon/han-solo-icon-0.jpg',
        time: formatDistance(new Date(2023, 3, 10, 22, 30), new Date()),
        content: 'Морген - ЛОХХХ!',
        likeCount: 9874561,
        dislikeCount: 1,
        liked: true,
        children: [
          {
            author: 'Homer Simpson',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2G3hQ3lDGBlHZwanMAQA87EuYSIjv4p-CjoJOFpa6ufLSq31iuUzISrhl5HbGIAf9ME&usqp=CAU',
            time: formatDistance(new Date(2023, 3, 10, 22, 35), new Date()),
            content:
              'Ублюдок, мать твою, а ну иди сюда, говно собачье, решил ко мне лезть? Ты, засранец вонючий, мать твою, а?',
            likeCount: 1,
            dislikeCount: 99999999999,
            disliked: true,
          },
          {
            author: 'Han Solo',
            avatar: 'https://icon-library.com/images/han-solo-icon/han-solo-icon-0.jpg',
            time: formatDistance(new Date(2023, 3, 10, 22, 44), new Date()),
            content: 'Сука, падла, говножуй залетный, урод, чмо болотное, а ну иди сюда, ты!',
            likeCount: 65464574757457,
            dislikeCount: 1,
            liked: true,
          },
          {
            author: 'Homer Simpson',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2G3hQ3lDGBlHZwanMAQA87EuYSIjv4p-CjoJOFpa6ufLSq31iuUzISrhl5HbGIAf9ME&usqp=CAU',
            time: formatDistance(new Date(2023, 3, 10, 22, 35), new Date()),
            content: 'Говно собачье, решил ко мне лезть? Ты, засранец вонючий, мать твою, а?',
            likeCount: 1,
            dislikeCount: 99999999999,
            disliked: true,
          },
        ],
      },
      {
        author: 'Han Solo',
        avatar: 'https://icon-library.com/images/han-solo-icon/han-solo-icon-0.jpg',
        time: formatDistance(new Date(2023, 3, 10, 22, 38), new Date()),
        content:
          'Ну иди сюда, попробуй меня трахнуть, я тебя сам трахну, ублюдок, онанист чертов, будь ты проклят, иди идиот, трахать тебя и всю семью, говно собачье, жлоб вонючий, дерьмо, сука, падла, иди сюда, мерзавец, негодяй, гад, иди сюда, ты — говно, жопа!',
        likeCount: 12427,
        dislikeCount: 1,
        liked: true,
        children: [
          {
            author: 'Homer Simpson',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2G3hQ3lDGBlHZwanMAQA87EuYSIjv4p-CjoJOFpa6ufLSq31iuUzISrhl5HbGIAf9ME&usqp=CAU',
            time: formatDistance(new Date(2023, 3, 10, 22, 42), new Date()),
            content: 'Вот козлина!',
            likeCount: 1,
            dislikeCount: 99999999999,
            disliked: true,
          },
        ],
      },
      {
        author: 'Homer Simpson',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2G3hQ3lDGBlHZwanMAQA87EuYSIjv4p-CjoJOFpa6ufLSq31iuUzISrhl5HbGIAf9ME&usqp=CAU',
        time: formatDistance(new Date(2023, 3, 10, 22, 42), new Date()),
        content:
          'Хрен моржовый, иди сюда, ты засранец! Решил меня натянуть, гондон рваный?! Я тебе сам натяну по самые гланды! Тебя и всю твою гребаную семейку!! Что, очко поджал, п***р вонючий?',
        likeCount: 1,
        dislikeCount: 99999999999,
        disliked: true,
      },
      {
        author: 'Han Solo',
        avatar: 'https://icon-library.com/images/han-solo-icon/han-solo-icon-0.jpg',
        time: formatDistance(new Date(2023, 3, 10, 22, 44), new Date()),
        content: 'Циклоп прыщавый, сука, падла, говножуй залетный, урод, чмо болотное, а ну иди сюда, ты!',
        likeCount: 65464574757457,
        dislikeCount: 1,
        liked: true,
      },
      {
        author: 'Homer Simpson',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2G3hQ3lDGBlHZwanMAQA87EuYSIjv4p-CjoJOFpa6ufLSq31iuUzISrhl5HbGIAf9ME&usqp=CAU',
        time: formatDistance(new Date(2023, 3, 10, 22, 42), new Date()),
        content: 'Я те жопу порву, член на шею намотаю! Иди сюда, дюдел драный!',
        likeCount: 1,
        dislikeCount: 99999999999,
        disliked: true,
      },
    ],
  };
};
