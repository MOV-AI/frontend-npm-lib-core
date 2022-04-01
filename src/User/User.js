import Authentication, {
  INTERNAL_AUTHENTICATIONS,
  NEW_TOKEN_VERSION_ID
} from "../Authentication/Authentication";
import Rest from "../Rest/Rest";
import PermissionSingleton, {
  APPLICATIONS_PERMISSION_SCOPE
} from "../Permission/Permission";
import Utils from "../Utils/Utils";
import AclObject from "../AclObject/AclObject";
import InternalUser from "../InternalUser/InternalUser";
import Role from "../Role/Role";

const USER_API_ROUTE = "v1/User";

class User {
  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT = 3000; // milisec
  }

  getData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Authentication.getToken()}`
    };

    return new Promise((resolve, reject) => {
      const currTime = new Date().getTime();

      // send cached value
      if (currTime - this.timestamp <= this.TIMEOUT && this.data) {
        return resolve({ response: this.data });
      }

      this.timestamp = currTime;

      this.getUserCall()
        .then(data => {
          this.data = data;
          const user = data?.info ?? data;
          resolve({
            response: {
              ...user,
              Label: user.account_name ?? user.Label ?? user.AccountName,
              Superuser: user.super_user ?? user.Superuser ?? user.SuperUser
            }
          });
        })
        .catch(error => {
          // error while parsing request
          this.data = null;
          reject({ error });
        });
    });
  };

  isSuperUser = async () => {
    const { response: user } = await this.getData();
    return user?.Superuser ?? false;
  };

  getAllowedApps = async () => {
    const { response: user } = await this.getData();
    const userWithPermissions = await User.withPermissions(user);
    return userWithPermissions.Resources?.[APPLICATIONS_PERMISSION_SCOPE] || [];
  };

  getUserCall = () => {
    if (!Authentication.isNewToken(this.tokenData)) {
      return Rest.get({
        path: `${USER_API_ROUTE}/${this.tokenData.message.name}/`
      });
    }
    const { domain_name, account_name } = this.tokenData[NEW_TOKEN_VERSION_ID];
    if (INTERNAL_AUTHENTICATIONS.includes(domain_name)) {
      return InternalUser.get(account_name);
    }
    return AclObject.get({ domain_name, account_name });
  };

  getCurrentUserWithPermissions = async () => {
    const { response: user } = await this.getData();
    const userWithPermissions = await User.withPermissions(user);
    return userWithPermissions;
  };

  static withPermissions = async user => {
    user.allRoles = await Role.getAll();
    user.allResourcesPermissions = await PermissionSingleton.getAll();
    user.resourcesPermissions = Utils.parseUserData(user);
    return user;
  };

  static hasPermission = (user, resource, operation) => {
    if (user.Superuser) return true;
    return (user.Resources?.[resource] || []).includes(operation);
  };
}

export default User;
