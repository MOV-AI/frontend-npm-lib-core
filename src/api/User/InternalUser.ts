import { HttpErrorResponse } from "../../models/http";
import {
  ChangePassword,
  UserPost,
  InternalUserModel as InternalUserModel,
  UserUpdateResult,
  UserPut,
  ResetPassword
} from "../../models/user";
import Rest from "../Rest/Rest";
import { REQUEST_STATUS } from "../Utils/constants";
import BaseUser from "./BaseUser";

const INTERNAL_USER_API_ROUTE = "v2/InternalUser";

class InternalUser extends BaseUser {
  constructor() {
    super();
  }

  getData = (): Promise<InternalUserModel> => {
    const accountName = this.getUsername();
    return InternalUser.get(accountName);
  };

  isInternalUser = () => true;

  changePassword = (model: ChangePassword): Promise<UserUpdateResult> =>
    Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/change-password`,
      body: model
    });

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  static getAll = (): Promise<{ [accountName: string]: InternalUserModel }> =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/`
    }).catch((err: HttpErrorResponse) => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });

  static get = (accountName: string): Promise<InternalUserModel> =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/${accountName}/`
    });

  static delete = (user: { name: string }): Promise<UserUpdateResult> => {
    return Rest.delete({ path: `${INTERNAL_USER_API_ROUTE}/${user.name}/` });
  };

  static create = (model: UserPost): Promise<UserUpdateResult> =>
    Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/new/`,
      body: model
    });

  static update = (userId: string, model: UserPut): Promise<UserUpdateResult> =>
    Rest.put({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/`,
      body: model
    });

  static resetPassword = (
    userId: string,
    model: ResetPassword
  ): Promise<UserUpdateResult> => {
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/reset-password`,
      body: model
    });
  };
}

export default InternalUser;
