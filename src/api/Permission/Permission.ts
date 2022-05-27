import Rest from "../Rest/Rest";

class Permission {
  cachedPermissions: any;

  getAll = async () => {
    if (!this.cachedPermissions) {
      this.cachedPermissions = await Rest.get({ path: "v1/permissions/" });
    }
    return this.cachedPermissions;
  };
}

const permission = new Permission();
export default permission;
