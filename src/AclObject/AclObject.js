import Rest from "../Rest/Rest";

const ACL_OBJECT_API_ROUTE = "v2/acl";

class AclObject {
  constructor() {}

  static get = (domainName, accountName) =>
    Rest.get({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/users/${accountName}/`
    });
}

export default AclObject;
