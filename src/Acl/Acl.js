import Rest from "../Rest/Rest";
import User from "../User/User";
import { REQUEST_STATUS } from "../Utils/constants";

export const ACL_API_ROUTE = "v2/acl";

class Acl {
  constructor() {}

  static get = (domainName, accountName) =>
    Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/users/${accountName}/`
    });

  static getUsersByDomain = domainName => {
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/users/`
    }).catch(err => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static getGroupsByDomain = domainName => {
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/groups/`
    }).catch(err => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static addResourcesToAcl = (domainName, resourceType, postModel) => {
    return Rest.post({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: postModel
    }).catch(err => {
      console.warn(`Error saving ${resourceType}: `, err);
    });
  };

  static updateResourceInACL = (domainName, resourceType, putModel) => {
    return Rest.put({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: putModel
    }).catch(err => {
      console.warn(`Error saving ${resourceType}: `, err);
    });
  };

  static deleteResourceFromAcl = (domainName, resourceType, deleteModel) => {
    return Rest.delete({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: deleteModel
    }).catch(err => {
      console.log(`Error deleting ${resourceType}: `, err);
    });
  };
}

export default Acl;
