import Rest from "../Rest/Rest";

const ROLE_API_ROUTE = "v1/Role";

class Role {
  constructor() {}

  static getAll = () =>
    Rest.get({
      path: `${ROLE_API_ROUTE}/`
    });
}

export default Role;
