import { ScopePermissions } from "../../models/permission";
import Rest from "../Rest/Rest";

class Permission {
  cachedPermissions: ScopePermissions;

  getAll = async (): Promise<ScopePermissions> => {
    if (!this.cachedPermissions) {
      this.cachedPermissions = await Rest.get({ path: "v1/permissions/" });
    }
    return this.cachedPermissions;
  };
}

const permission = new Permission();
export default permission;
