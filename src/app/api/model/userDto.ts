import { RoleDto, CountryCodeType, SexType } from '../model';

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
