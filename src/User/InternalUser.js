import { NEW_TOKEN_VERSION_ID } from "../Authentication/Authentication";
import Rest from "../Rest/Rest";
import { REQUEST_STATUS } from "../Utils/constants";
import BaseUser from "./BaseUser";

const INTERNAL_USER_API_ROUTE = "v2/InternalUser";

class InternalUser extends BaseUser {
  constructor() {
    super();
  }

  getData = () => {
    const { account_name } = this.tokenData[NEW_TOKEN_VERSION_ID];
    return InternalUser.get(account_name);
  };

  getCurrentPermissions = () => {
    return Rest.get({ path: "v2/User/effective-permissions" });
  };

  isInternalUser = _ => true;

  changePassword = body => {
    const { current_password, new_password, confirm_password } = body;
    const model = {
      CurrentPassword: current_password,
      NewPassword: new_password,
      ConfirmPassword: confirm_password
    };
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/change-password/`,
      body: model
    });
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  static getAll = () =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/`
    }).catch(err => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });

  static get = accountName =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/${accountName}/`
    });

  static delete = ({ name }) => {
    return Rest.delete({ path: `${INTERNAL_USER_API_ROUTE}/${name}/` });
  };

  static resetPassword = (userId, data) => {
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/reset-password/`,
      body: data
    });
  };
}

export default InternalUser;
