import { CountryCodeType } from '../common';

export interface ServerDto {
  countryCode: CountryCodeType;
  name: string;
  address: string;
  playerCount: number;
}
