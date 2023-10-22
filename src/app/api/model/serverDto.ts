import { CountryCodeType } from './countryCodeType';

export interface ServerDto {
  countryCode: CountryCodeType;
  name: string;
  address: string;
  playerCount: number;
}
