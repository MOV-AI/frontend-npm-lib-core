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

  isInternalUser = () => true;

  changePassword = model => {
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/change-password`,
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

  static resetPassword = (userId, model) => {
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/reset-password`,
      body: model
    });
  };

  static create = model =>
    Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/new/`,
      body: model
    });

  static update = (userId, model) =>
    Rest.put({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/`,
      body: model
    });
}

export default InternalUser;
