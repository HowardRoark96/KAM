import { PermissionCodeType } from '../../model/administration';

export interface PermissionDto {
  id: number;
  code: PermissionCodeType;
  description?: {
    [key: string]: string;
  };
}
