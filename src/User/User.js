import Authentication from "../Authentication/Authentication";
import Rest from "../Rest/Rest";

class User {
  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT = 3000; // milisec
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Public Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Get user data
   * @returns {Promise<User>}
   */
  getData = () => {
    const { name } = this.tokenData.message;

    return new Promise((resolve, reject) => {
      const currTime = new Date().getTime();

      // send cached value
      if (currTime - this.timestamp <= this.TIMEOUT && this.data) {
        return resolve({ response: this.data });
      }

      this.timestamp = currTime;

      Rest.get({ path: `v1/User/${name}/` })
        .then(response => {
          this.data = response;
          resolve({ response });
        })
        .catch(error => {
          // error while parsing request
          this.data = null;
          reject({ error });
        });
    });
  };

  /**
   * Parse token to get superuser information
   * @returns {boolean}
   */
  isSuperUser = async () => {
    const data = await this.getData();
    return data?.response?.Superuser || false;
  };

  /**
   * Get allowed apps
   * @returns {Promise<array>} List of allowed apps
   */
  getAllowedApps = async () => {
    const data = await this.getData();
    return data?.response?.Resources?.Applications || [];
  };

  /**
   * Change user password
   * @param {{current_password: string, new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  changePassword = async body => {
    return Rest.post({ path: `v1/User/change-password/`, body });
  };

  /**
   * Reset user password
   * @param {{new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  resetPassword = async body => {
    const userId = this.tokenData.message.name;
    return Rest.post({ path: `v1/User/${userId}/reset-password/`, body });
  };
}

export default User;
