import Authentication from "../Authentication/Authentication";

class User {
  constructor() {
    this.baseUrl = `${window.location.origin}/api/v1/User`;
    this.tokenData = Authentication.getTokenData();
    this.data = null;
    this.timestamp = null;
    this.TIMEOUT = 3000; // milisec
  }

  getData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Authentication.getToken()}`
    };
    const { name } = this.tokenData.message;
    const url = `${this.baseUrl}/${name}/`;

    return new Promise((resolve, reject) => {
      const currTime = new Date().getTime();

      // send cached value
      if (currTime - this.timestamp <= this.TIMEOUT && this.data) {
        return resolve({ response: this.data });
      }

      this.timestamp = currTime;

      fetch(url, { headers })
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
              resolve({ response: data });
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
    const data = await this.getData();
    return data?.response?.Superuser || false;
  };
}

export default User;
