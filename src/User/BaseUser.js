import Authentication from "../Authentication/Authentication";
import { APPLICATIONS_PERMISSION_SCOPE } from "../Permission/Permission";

class BaseUser {
  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT = 3000; // milisec
  }

  getUsername = () => {
    return this.tokenData?.message?.name;
  };

  isSuperUser = () => {
    return this.tokenData?.message?.superUser;
  };

  getAllowedApps = async () => {
    const { Permissions } = await this.getCurrentPermissions();
    return Permissions?.[APPLICATIONS_PERMISSION_SCOPE] || [];
  };

  getCurrentUserWithPermissions = async () => {
    const { Permissions, Roles } = await this.getCurrentPermissions();
    const userWithPermissions = {
      Label: this.getUsername(),
      Resources: Permissions,
      Superuser: this.isSuperUser(),
      Roles
    };
    return userWithPermissions;
  };

  getData = async () => {
    /* Implemented in derived classes */
  };

  getCurrentPermissions = () => {
    /* Implemented in derived classes */
  };

  isInternalUser = () => {
    /* Implemented in derived classes */
  };

  changePassword = body => {
    /* Implemented in derived classes */
  };
}

export default BaseUser;
