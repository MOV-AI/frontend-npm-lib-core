import Rest from "../Rest/Rest";

const INTERNAL_USER_API_ROUTE = "v2/InternalUser";

class InternalUser {
  constructor() {}

  static getAll = () =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/`
    });

  static get = accountName =>
    Rest.get({
      path: `${INTERNAL_USER_API_ROUTE}/${accountName}/`
    });
}

export default InternalUser;
