import { REQUEST_ERROR_CODES } from "../Utils/constants";
import BaseUser from "./BaseUser";

class AclUser extends BaseUser {
  constructor() {
    super();
  }

  getData = _ => {
    return this.getCurrentUserWithPermissions();
  };

  changePassword = _ => {
    throw new Error(REQUEST_ERROR_CODES.NOT_ALLOWED);
  };

  resetPassword = _ => {
    throw new Error(REQUEST_ERROR_CODES.NOT_ALLOWED);
  };

  isInternalUser = _ => false;
}

export default AclUser;
