import Rest from "../Rest/Rest";
import { ACL_API_ROUTE } from "../Acl/Acl";
import Authentication from "../Authentication/Authentication";
import { HttpErrorResponse } from "../../models/http";
import {
  LdapDomain,
  LdapDomainPost,
  LdapUpdateResult,
  LdapDomainPut,
  LdapResourceType,
  LdapSearch
} from "../../models/ldap";

const LDAP_API_ROUTE = "v2/LdapConfig";

class Ldap {
  static validate = async (domainName: string): Promise<{ success: boolean }> =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/${domainName}/validate`
    });

  static getAllDomains = async (): Promise<string[]> => {
    const defaultDomains = [Authentication.DEFAULT_PROVIDER];
    return Authentication.getProviders()
      .then(response => response.domains)
      .catch(e => {
        console.warn("Error getting Ldap Domains:", e.statusText);
        return defaultDomains;
      });
  };

  static getExternalDomains = (): Promise<string[]> =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/`
    }).catch((e: HttpErrorResponse) => {
      console.warn("Error getting Ldap Domains:", e.statusText);
      throw e;
    });

  static getDomain = (domainName: string): Promise<LdapDomain> =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    }).catch((e: HttpErrorResponse) => {
      console.warn("Error getting Ldap Data:", e.statusText);
      throw e;
    });

  static createDomain = (
    postModel: LdapDomainPost
  ): Promise<LdapUpdateResult> =>
    Rest.post({
      path: `${LDAP_API_ROUTE}/new`,
      body: postModel
    });

  static updateDomain = (
    domainName: string,
    putModel: LdapDomainPut
  ): Promise<LdapUpdateResult> =>
    Rest.put({
      path: `${LDAP_API_ROUTE}/${domainName}/`,
      body: putModel
    });

  static deleteDomain = (domainName: string): Promise<LdapUpdateResult> =>
    Rest.delete({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    });

  static search = (
    domainName: string,
    resourceType: LdapResourceType,
    queryText = ""
  ): Promise<LdapSearch[]> => {
    if (!queryText) return Promise.resolve([]);
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/search`,
      search: { common_name: queryText }
    }).catch((e: HttpErrorResponse) => {
      console.warn("Error searching Ldap Data:", e.statusText);
      throw e;
    });
  };

  static getProtocols = (): {
    [protocolId: number]: { id: number; name: string };
  } => ({
    2: { id: 2, name: "PROTOCOL_SSLv3" },
    3: { id: 3, name: "PROTOCOL_TLSv1" },
    4: { id: 4, name: "PROTOCOL_TLSv1_1" },
    5: { id: 5, name: "PROTOCOL_TLSv1_2" }
  });
}

export default Ldap;
