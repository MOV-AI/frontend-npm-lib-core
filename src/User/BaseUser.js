import Authentication from "../Authentication/Authentication";
import { APPLICATIONS_PERMISSION_SCOPE } from "../Permission/Permission";
import Rest from "../Rest/Rest";

class BaseUser {
  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT_MS = 3000;
  }

  getUsername = () => {
    return this.tokenData?.message?.name;
  };

  isSuperUser = () => {
    return this.tokenData?.message?.superUser;
  };

  getAllowedApps = async () => {
    const { Permissions } = await this.getPermissions();
    return Permissions?.[APPLICATIONS_PERMISSION_SCOPE] || [];
  };

  getCurrentUserWithPermissions = async () => {
    const { Permissions, Roles, SuperUser } = await this.getPermissions();
    const userWithPermissions = {
      Label: this.getUsername(),
      Resources: Permissions,
      Superuser: SuperUser ?? this.isSuperUser(),
      Roles
    };
    return userWithPermissions;
  };

  getData = async () => {
    /* Implemented in derived classes */
  };

  getPermissions = () => {
    return Rest.get({ path: "v2/User/effective-permissions" });
  };

  isInternalUser = () => {
    /* Implemented in derived classes */
  };

  changePassword = body => {
    /* Implemented in derived classes */
  };

  resetPassword = body => {
    /* Implemented in derived classes */
  };
}

export default BaseUser;
