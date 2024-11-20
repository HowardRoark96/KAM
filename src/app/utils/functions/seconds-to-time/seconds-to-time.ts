import { Nullable } from '@customTypes/nullable.type';

export const secondsToTime = (seconds: Nullable<number>) => {
  if (!seconds) return 0;

  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  return h + ':' + m + ':' + s;
};
