import { REQUEST_ERROR_CODES } from "../Utils/constants";
import BaseUser from "./BaseUser";

class AclUser extends BaseUser {
  constructor() {
    super();
  }

  getData = () => {
    return this.getCurrentUserWithPermissions();
  };

  changePassword = () => {
    throw new Error(REQUEST_ERROR_CODES.NOT_ALLOWED);
  };

  resetPassword = () => {
    throw new Error(REQUEST_ERROR_CODES.NOT_ALLOWED);
  };

  isInternalUser = () => false;
}

export default AclUser;
