import Authentication from "../Authentication/Authentication";
import {
  APPLICATIONS_PERMISSION_SCOPE,
  UserPermissions,
} from "../../models/permission";
import { ChangePassword, UserWithPermissions } from "../../models/user";
import Rest from "../Rest/Rest";

class BaseUser {
  constructor(
    public tokenData = Authentication.getTokenData(),
    public data = null,
    public timestamp = null,
    public TIMEOUT_MS = 3000,
  ) {}

  getUsername = (): string => {
    return this.tokenData?.message?.name;
  };

  isSuperUser = (): boolean => {
    return this.tokenData?.message?.superUser;
  };

  getAllowedApps = async (): Promise<string[]> => {
    const { Permissions } = await this.getPermissions();
    return Permissions?.[APPLICATIONS_PERMISSION_SCOPE] || [];
  };

  getCurrentUserWithPermissions = async (): Promise<UserWithPermissions> => {
    const { Permissions, Roles, SuperUser } = await this.getPermissions();
    return {
      Label: this.getUsername(),
      Resources: Permissions || {},
      Superuser: SuperUser ?? this.isSuperUser(),
      Roles,
    };
  };

  getData = () => {
    /* Implemented in derived classes */
  };

  getPermissions = (): Promise<UserPermissions> => {
    return Rest.get({ path: "v2/User/effective-permissions" });
  };

  isInternalUser = () => {
    /* Implemented in derived classes */
  };

  changePassword = (_model: ChangePassword) => {
    /* Implemented in derived classes */
  };

  resetPassword = () => {
    /* Implemented in derived classes */
  };

  setLanguage = (_language: string): Promise<boolean> => {
    /* Implemented in derived classes */
    return Promise.resolve(true);
  };
}

export default BaseUser;
