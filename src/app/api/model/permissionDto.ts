import { PermissionCodeType } from '../model';

export interface PermissionDto {
  id: number;
  code: PermissionCodeType;
  description?: {
    [key: string]: string;
  };
}
