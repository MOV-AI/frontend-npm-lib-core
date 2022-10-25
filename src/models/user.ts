import { PermissionType, ResourcePermission } from "./permission";
import { RolesMap } from "./role";

export interface ChangePassword {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

export interface ResetPassword {
  NewPassword: string;
  ConfirmPassword: string;
}

export interface UserModel {
  Resources: { [scope: string]: string[] };
  Superuser: boolean;
  allRoles: RolesMap;
  allResourcesPermissions: { [scope: string]: string[] };
  resourcesPermissions: ResourcePermission[];
}

export interface UserPost {
  AccountName: string;
  CommonName: string;
  Email: string;
  Password: string;
  ReadOnly: boolean;
  Roles: [string];
  SendReport: boolean;
  SuperUser: boolean;
}

export interface UserPut {
  Roles: string[];
  CommonName: string;
  Email: string;
  ReadOnly: boolean;
  SuperUser: boolean;
  SendReport: boolean;
}

export type UserType = "INTERNAL" | "EXTERNAL";

export interface InternalUserModel {
  AccountName: string;
  CommonName: string;
  DomainName: string;
  Email: string;
  LastUpdate: {
    date: string;
    user: string;
  };
  ReadOnly: boolean;
  Roles: string[];
  SendReport: boolean;
  SuperUser: boolean;
  UserType: UserType;
}

export interface UserWithPermissions {
  Label: string;
  Resources: { [scopeName: string]: PermissionType[] };
  Superuser: boolean;
  Roles: string[];
}

export interface UserUpdateResult {
  success: boolean;
}
