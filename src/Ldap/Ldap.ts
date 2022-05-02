import Rest from "../Rest/Rest";
import { ACL_API_ROUTE } from "../Acl/Acl";
import Authentication from "../Authentication/Authentication";
import {
  HttpResponse,
  LdapDomainPostModel,
  LdapDomainPutModel
} from "../models";

const LDAP_API_ROUTE = "v2/LdapConfig";

class Ldap {
  constructor() {}

  static getAllDomains = async (): Promise<{ domains: string[] }> => {
    const defaultDomains = [Authentication.DEFAULT_PROVIDER];
    return Authentication.getProviders()
      .then(response => response.domains)
      .catch(err => defaultDomains);
  };

  static getExternalDomains = (): Promise<string[]> =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/`
    }).catch((e: HttpResponse) => {
      console.log("Error getting Ldap Domains:", e.statusText);
      throw e;
    });

  static getDomain = (domainName = "") =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    }).catch((e: HttpResponse) => {
      console.log("Error getting Ldap Data:", e.statusText);
      throw e;
    });

  static createDomain = (formData: LdapDomainPostModel) =>
    Rest.post({
      path: `${LDAP_API_ROUTE}/new`,
      body: formData
    });

  static updateDomain = (domainName: string, formData: LdapDomainPutModel) =>
    Rest.put({
      path: `${LDAP_API_ROUTE}/${domainName}/`,
      body: formData
    });

  static deleteDomain = (domainName: string) =>
    Rest.delete({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    });

  static search = (
    domainName: string,
    resourceType: "group" | "user",
    queryText = ""
  ) => {
    if (!queryText) return Promise.resolve([]);
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/search`,
      search: { common_name: queryText }
    }).catch((e: HttpResponse) => {
      console.log("Error searching Ldap Data:", e.statusText);
      throw e;
    });
  };

  static getProtocols = () => ({
    2: { id: 2, name: "PROTOCOL_SSLv3" },
    3: { id: 3, name: "PROTOCOL_TLSv1" },
    4: { id: 4, name: "PROTOCOL_TLSv1_1" },
    5: { id: 5, name: "PROTOCOL_TLSv1_2" }
  });
}

export default Ldap;
