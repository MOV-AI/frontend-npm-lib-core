import {
  AclDeleteModel,
  AclList,
  Acl as AclModel,
  AclPost,
  AclBatchResult,
  AclPut,
  AclPutResult
} from "../models/acl";
import { HttpErrorResponse } from "../models/http";
import { LdapResourceType } from "../models/ldap";
import Rest from "../Rest/Rest";
import { REQUEST_STATUS } from "../Utils/constants";

export const ACL_API_ROUTE = "v2/Acl";

export default class Acl {
  static get = (domainName: string, accountName: string): Promise<AclModel> =>
    Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/user/${accountName}/`
    });

  static getUsersByDomain = (domainName: string): Promise<AclList> => {
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/user/`
    }).catch((err: HttpErrorResponse) => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static getGroupsByDomain = (domainName: string): Promise<AclList> => {
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/group/`
    }).catch((err: HttpErrorResponse) => {
      if (err.status === REQUEST_STATUS.NOT_FOUND) return [];
      else throw err;
    });
  };

  static addResourcesToAcl = (
    domainName: string,
    resourceType: LdapResourceType,
    postModel: AclPost[]
  ): Promise<AclBatchResult> => {
    return Rest.post({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: postModel
    }).catch((err: HttpErrorResponse) => {
      console.warn(`Error saving ${resourceType}: `, err);
      throw err;
    });
  };

  static updateResourceInACL = (
    domainName: string,
    resourceType: LdapResourceType,
    putModel: AclPut[]
  ): Promise<AclPutResult> => {
    return Rest.put({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: putModel
    }).catch((err: HttpErrorResponse) => {
      console.warn(`Error saving ${resourceType}: `, err);
      throw err;
    });
  };

  static deleteResourceFromAcl = (
    domainName: string,
    resourceType: LdapResourceType,
    deleteModel: AclDeleteModel[]
  ): Promise<AclBatchResult> => {
    return Rest.delete({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/`,
      body: deleteModel
    }).catch((err: HttpErrorResponse) => {
      console.log(`Error deleting ${resourceType}: `, err);
      throw err;
    });
  };
}
