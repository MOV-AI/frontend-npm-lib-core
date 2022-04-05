import Rest from "../Rest/Rest";
import { REQUEST_STATUS } from "../Utils/constants";

const INTERNAL_USER_API_ROUTE = "v2/InternalUser";

class InternalUser {
  constructor() {}

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

  static changePassword = (userId, data) => {
    return Rest.post({
      path: `${INTERNAL_USER_API_ROUTE}/${userId}/reset-password/`,
      body: data
    });
  };
}

export default InternalUser;
