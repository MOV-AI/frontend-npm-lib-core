import Rest from "../Rest/Rest";

const LDAP_API_ROUTE = "v2/ldap/configuration";

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

  static saveDomain = (domainName, formData, method) =>
    Rest[method]({
      path: `${LDAP_API_ROUTE}/${domainName}/`,
      body: formData
    });

  static deleteDomain = domainName =>
    Rest.delete({
      path: `${LDAP_API_ROUTE}/${domainName}/`
    });

  static getProtocols = () => ({
    2: { id: 2, name: "PROTOCOL_SSLv3" },
    3: { id: 3, name: "PROTOCOL_TLSv1" },
    4: { id: 4, name: "PROTOCOL_TLSv1_1" },
    5: { id: 5, name: "PROTOCOL_TLSv1_2" }
  });
}

export default Ldap;
