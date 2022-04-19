import Rest from "../Rest/Rest";
import BaseUser from "./BaseUser";

class AclUser extends BaseUser {
  constructor() {
    super();
  }

  getData = _ => {
    return this.getCurrentUserWithPermissions();
  };

  changePassword = _ => {
    /* Empty on purpose */
  };

  resetPassword = _ => {
    /* Empty on purpose */
  };

  isInternalUser = _ => false;

  getCurrentPermissions = () => {
    return Rest.get({ path: "v2/User/effective-permissions" });
  };
}

export default AclUser;
