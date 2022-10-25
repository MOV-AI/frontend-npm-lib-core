import { ScopePermissions } from "./permission";

export interface RoleUpdateModel {
  data: {
    Label: string;
    Resources: ScopePermissions;
  };
}

export interface RoleUpdateResult {
  name: string;
  success: boolean;
}

export interface RoleModel {
  Label: string;
  LastUpdate: {
    data: string;
  };
  Resources: ScopePermissions;
}

export interface RolesMap {
  [roleName: string]: RoleModel;
}
