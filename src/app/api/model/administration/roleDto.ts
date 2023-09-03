import { PermissionDto, RoleType } from '../administration';

export interface RoleDto {
  id: number;
  name: string;
  type: RoleType;
  permissions: PermissionDto[];
  description?: {
    [key: string]: string;
  };
}
