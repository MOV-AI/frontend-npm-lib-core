import Authentication, {
  NEW_TOKEN_VERSION_ID
} from "../Authentication/Authentication";
import Rest from "../Rest/Rest";
import PermissionSingleton from "../Permission/Permission";
import Utils from "../Utils/Utils";

const APPLICATIONS_SCOPE = "Applications";

class User {
  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.baseUrl = this.getBaseUrl();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT = 3000; // milisec
  }

  getData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Authentication.getToken()}`
    };

    return new Promise((resolve, reject) => {
      const currTime = new Date().getTime();

      // send cached value
      if (currTime - this.timestamp <= this.TIMEOUT && this.data) {
        return resolve({ response: this.data });
      }

      this.timestamp = currTime;

      fetch(this.baseUrl, { headers })
        .then(response => {
          // request error
          if (!response.ok) {
            reject({ error: response.statusText });
          }

          // parse response
          response
            .json()
            .then(data => {
              this.data = data;
              const userData = data?.info ?? data;
              resolve({
                response: {
                  ...userData,
                  Label: userData.account_name || userData.Label,
                  Superuser: userData.super_user || userData.Superuser
                }
              });
            })
            .catch(error => {
              this.data = null;
              reject({ error });
            });
        })
        .catch(error => {
          // error while parsing request
          this.data = null;
          reject({ error });
        });
    });
  };

  isSuperUser = async () => {
    const { response: user } = await this.getData();
    if (this.isNewToken()) {
      return user?.info?.super_user ?? false;
    }
    return user?.Superuser || false;
  };

  getAllowedApps = async () => {
    const { response: user } = await this.getData();
    const userWithPermissions = await User.withPermissions(user);

    const applications =
      userWithPermissions.permissionsByScope[APPLICATIONS_SCOPE];
    console.log("applications: ", applications);
    return applications || [];
  };

  getBaseUrl = () => {
    if (this.isNewToken()) {
      const { domain_name, account_name } =
        this.tokenData[NEW_TOKEN_VERSION_ID];
      return `${window.location.origin}/api/v2/acl/${domain_name}/users/${account_name}/`;
    }
    const name = this.tokenData.message?.name;
    if (!name) return ``;
    return `${window.location.origin}/api/v1/User/${name}/`;
  };

  static withPermissions = async user => {
    user["allRoles"] = await Rest.get({
      path: "v1/Role/"
    });
    user["allResourcesPermissions"] = await PermissionSingleton.getAll();
    user["resourcesPermissions"] = Utils.parseUserData(user);
    return user;
  };

  isNewToken = () => !!this.tokenData[NEW_TOKEN_VERSION_ID];
}

export default User;
