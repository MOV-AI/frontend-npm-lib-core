import Rest from "../Rest/Rest";
import BaseUser from "./BaseUser";

const USER_API_ROUTE = "v1/User";

class UserV1 extends BaseUser {
  constructor() {
    super();
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
      if (currTime - this.timestamp <= this.TIMEOUT_MS && this.data) {
        return resolve({ response: this.data });
      }

      this.timestamp = currTime;

      return Rest.get({
        path: `${USER_API_ROUTE}/${this.tokenData.message.name}/`
      })
        .then(data => {
          this.data = data;
          resolve({ response: data });
        })
        .catch(error => {
          // error while parsing request
          this.data = null;
          reject({ error });
        });
    });
  };

  getCurrentPermissions = () => {
    return this.getData().then(({ response: user }) => {
      return { ...user, Roles: [user.Role], Permissions: user.Resources };
    });
  };

  /**
   * Checks if user is internal
   * @returns {string} username
   */
  isInternalUser = () => true;

  isSuperUser = () => {
    console.log("isSuperUser: ", this.data);
    return this.data.Superuser;
  };

  /**
   * Change user password
   * @param {{current_password: string, new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  changePassword = body => {
    return Rest.post({ path: `v1/User/change-password/`, body });
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
  static resetPassword = (userId, body) => {
    return Rest.post({ path: `v1/User/${userId}/reset-password/`, body });
  };
}

export default UserV1;
