import { RoleDto } from '../administration';
import { CountryCodeType, SexType } from '../common';

export interface UserDto {
  id: number;
  username: string;
  name?: string;
  email: string;
  country?: CountryCodeType;
  registrationDate: string;
  age?: number;
  sex?: SexType;
  about?: string;
  avatar?: string;
  roles: RoleDto[];
}
