import Authentication, {
  INTERNAL_AUTHENTICATIONS,
  NEW_TOKEN_VERSION_ID
} from "../Authentication/Authentication";
import Rest from "../Rest/Rest";
import PermissionSingleton, {
  APPLICATIONS_PERMISSION_SCOPE
} from "../Permission/Permission";
import Utils from "../Utils/Utils";
import Acl from "../Acl/Acl";
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

  //========================================================================================
  /*                                                                                      *
   *                                    Public Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Get user data
   * @returns {Promise<User>}
   */
  getData = () => {
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

  /**
   * Parse token to get superuser information
   * @returns {boolean}
   */
  isSuperUser = async () => {
    const { response: user } = await this.getData();
    return user?.Superuser ?? false;
  };

  /**
   * Get allowed apps
   * @returns {Promise<array>} List of allowed apps
   */
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
    return Acl.get(domain_name, account_name);
  };

  getCurrentUserWithPermissions = async () => {
    const { response: user } = await this.getData();
    const userWithPermissions = await User.withPermissions(user);
    /*For testing purposes - to be deleted after FP-1642 is merged */
    console.log("getCurrentUserWithPermissions: ", userWithPermissions);
    return userWithPermissions;
  };

  static withPermissions = async user => {
    user.allRoles = await Role.getAll();
    user.allResourcesPermissions = await PermissionSingleton.getAll();
    user.resourcesPermissions = Utils.parseUserData(user);
    return user;
  };

  /**
   * Check if user has permission for a resource operation
   * @param {{Superuser: boolean, Resources: object }} user : The User
   * @param {string} resource : Resource or Scope
   * @param {string} operation :  The operation on the scope - "read", "write", "create" or "delete"
   * @returns {boolean} true if user has permission
   */
  static hasPermission = (user, resource, operation) => {
    if (user.Superuser) return true;
    return (user.Resources?.[resource] || []).includes(operation);
  };

  /**
   * Change user password
   * @param {{current_password: string, new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  changePassword = async body => {
    return Rest.post({ path: `v1/User/change-password/`, body });
  };

  /**
   * Get authenticated username
   * @returns {string} username
   */
  getUsername = () => {
    return this.tokenData?.message?.name;
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Reset user password
   * @param {string} userId : userId to change password
   * @param {{new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  static resetPassword = async (userId, body) => {
    return Rest.post({ path: `v1/User/${userId}/reset-password/`, body });
  };
}

export default User;
