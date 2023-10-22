import { PermissionDto, RoleType } from '../model';

export interface RoleDto {
  id: number;
  name: string;
  type: RoleType;
  permissions: PermissionDto[];
  description?: {
    [key: string]: string;
  };
}
