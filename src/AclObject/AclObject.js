import Rest from "../Rest/Rest";
import User from "../User/User";
import { REQUEST_STATUS } from "../Utils/constants";

const ACL_OBJECT_API_ROUTE = "v2/acl";

class AclObject {
  constructor() {}

  static get = (domainName, accountName) => {
    return Rest.get({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/users/${accountName}/`
    }).then(async ({ success, info }) => {
      if (!success) throw new Error("could not get user");
      return await User.withPermissions(info);
    });
  };

  static getUsersByDomain = domainName => {
    return Rest.get({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/users/`
    }).catch(err => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static getGroupsByDomain = domainName => {
    return Rest.get({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/groups/`
    }).catch(err => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static addResourcesToAcl = (domainName, resourceType, postModel) => {
    return Rest.post({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/${resourceType}/`,
      body: postModel
    }).catch(err => {
      console.log(`Error saving ${resourceType}: `, err);
    });
  };

  static updateResourceInACL = (domainName, resourceType, putModel) => {
    return Rest.put({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/${resourceType}/`,
      body: putModel
    }).catch(err => {
      console.log(`Error saving ${data.account_name}: `, err);
    });
  };

  static deleteResourceFromAcl = (domainName, resourceType, deleteModel) => {
    return Rest.delete({
      path: `${ACL_OBJECT_API_ROUTE}/${domainName}/${resourceType}/`,
      body: deleteModel
    }).catch(err => {
      console.log(`Error deleting ${resourceType}: `, err);
    });
  };

  static searchLDAP =
    entity =>
    (queryText = "", domainName) => {
      if (!queryText) return Promise.resolve([]);
      return Rest.get({
        path: `${ACL_OBJECT_API_ROUTE}/${domainName}/${entity}_search/`,
        search: { common_name: queryText }
      })
        .then(response => {
          if (!response.success || !response[entity]) return [];
          return response[entity].map(r => ({ ...r, domain_name: domainName }));
        })
        .catch(err => {
          console.log("Error: ", err);
          return [];
        });
    };
}

export default AclObject;
