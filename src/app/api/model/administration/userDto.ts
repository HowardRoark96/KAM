import { RoleDto } from '../administration';
import { CountryCodeType } from '../common';

export interface UserDto {
  id: number;
  username: string;
  name: string;
  email: string;
  country?: CountryCodeType;
  registrationDate: string;
  roles: RoleDto[];
}
