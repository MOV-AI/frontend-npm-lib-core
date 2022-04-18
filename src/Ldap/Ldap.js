import Rest from "../Rest/Rest";
import { ACL_API_ROUTE } from "../Acl/Acl";

const LDAP_API_ROUTE = "v2/LdapConfig";

class Ldap {
  constructor() {}

  static getAllDomains = async () => {
    const defaultDomains = ["internal"];
    return fetch(`/status/`)
      .then(response => response.json())
      .then(response => {
        if (!response.success) throw new Error();
        return response.domains;
      })
      .catch(err => defaultDomains);
  };

  static getExternalDomains = () =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/`
    }).catch(e => {
      console.log("Error getting Ldap Domains:", e.statusText);
      throw e;
    });

  static getDomain = (domainName = "") =>
    Rest.get({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    }).catch(e => {
      console.log("Error getting Ldap Data:", e.statusText);
      throw e;
    });

  static createDomain = formData =>
    Rest.post({
      path: `${LDAP_API_ROUTE}/new`,
      body: formData
    });

  static updateDomain = (domainName, formData) =>
    Rest.put({
      path: `${LDAP_API_ROUTE}/${domainName}/`,
      body: formData
    });

  static deleteDomain = domainName =>
    Rest.delete({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    });

  static search = (domainName, resourceType, queryText = "") => {
    if (!queryText) return Promise.resolve([]);
    return Rest.get({
      path: `${ACL_API_ROUTE}/${domainName}/${resourceType}/search`,
      search: { common_name: queryText }
    }).catch(err => {
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
