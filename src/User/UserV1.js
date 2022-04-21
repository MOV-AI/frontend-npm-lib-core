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
          this.data = null;
          reject({ error });
        });
    });
  };

  getPermissions = () => {
    return this.getData().then(({ response: user }) => {
      return {
        ...user,
        Roles: [user.Role],
        Permissions: user.Resources,
        SuperUser: user.Superuser
      };
    });
  };

  isInternalUser = () => true;

  isSuperUser = () => this.data.Superuser;

  changePassword = body => {
    return Rest.post({ path: `v1/User/change-password/`, body });
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  static resetPassword = (userId, body) => {
    return Rest.post({ path: `v1/User/${userId}/reset-password/`, body });
  };
}

export default UserV1;
