import Rest from "../Rest/Rest";

class Permission {
  cachedPermissions;

  constructor() {}

  getAll = async () => {
    if (!this.cachedPermissions) {
      this.cachedPermissions = await Rest.get({ path: "v1/permissions/" });
    }
    return this.cachedPermissions;
  };
}

const permissionSingleton = new Permission();

export default permissionSingleton;
