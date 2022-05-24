import { PermissionType, ResourcePermission } from "./permission";

export interface ChangePasswordModel {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

export interface ResetPasswordModel {
  NewPassword: string;
  ConfirmPassword: string;
}

export interface UserModel {
  Resources: { [scope: string]: string[] };
  Superuser: boolean;
  allRoles: string[];
  allResourcesPermissions: { [scope: string]: string[] };
  resourcesPermissions: ResourcePermission[];
}

export interface UserPostModel {
  AccountName: string;
  CommonName: string;
  Email: string;
  Password: string;
  ReadOnly: boolean;
  Roles: [string];
  SendReport: boolean;
  SuperUser: boolean;
}

export interface UserPutModel {
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
