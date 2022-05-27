export interface ResourcePermission {
  id: string;
  name: string;
  roleDefault: boolean;
  resourceType: string;
  value: boolean;
}

export type PermissionType = "create" | "read" | "write" | "delete";

export interface UserPermissions {
  Permissions: { [scopeName: string]: PermissionType[] };
  SuperUser: boolean;
  Roles: string[];
}

export const APPLICATIONS_PERMISSION_SCOPE = "Applications";
