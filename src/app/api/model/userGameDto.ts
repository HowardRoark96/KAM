import { Nullable } from '@customTypes/nullable.type';

export interface UserGameShortDto {
  id: string;
  rankChange: number;
  map: string;
  date: string;
  playingTime: number;
  isApproved?: Nullable<boolean>;
}
