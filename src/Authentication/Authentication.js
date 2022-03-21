import jwtDecode from "jwt-decode";

export const NEW_TOKEN_VERSION_ID = "v2";

const Authentication = {};

const INTERNAL_AUTHENTICATION = "internal";
const DEFAULT_PROVIDERS = [INTERNAL_AUTHENTICATION];
Authentication.DEFAULT_PROVIDER = INTERNAL_AUTHENTICATION;

Authentication.AuthException = function (message) {
  this.message = message;
  this.statusText = message;
  this.name = "AuthException";
};

Authentication.getToken = () => {
  return window.localStorage.getItem("movai.token") || false;
};

Authentication.getRefreshToken = () => {
  return window.localStorage.getItem("movai.refreshToken") || false;
};

Authentication.getRememberToken = () => {
  return window.localStorage.getItem("movai.tokenRemember") || false;
};

Authentication.getTokenData = () => {
  try {
    const token = Authentication.getToken();
    const decodedToken = jwtDecode(token);
    const tokenData = {
      message: decodedToken.message || { name: decodedToken.account_name },
      auth_token: false,
      refresh_token: Authentication.getRefreshToken(),
      error: false,
      access_token: token
    };
    const isNewTokenVersion = !!decodedToken.domain_name;
    if (isNewTokenVersion) {
      tokenData[NEW_TOKEN_VERSION_ID] = decodedToken;
    }

    return tokenData;
  } catch (error) {
    return {
      message: {},
      error: true
    };
  }
};

Authentication.getSessionFlag = () => {
  return window.sessionStorage.getItem("movai.session") || false;
};

Authentication.storeTokens = (data, remember) => {
  window.localStorage.setItem("movai.token", data["access_token"]);
  window.localStorage.setItem("movai.refreshToken", data["refresh_token"]);
  window.localStorage.setItem(
    "movai.tokenRemember",
    remember == "undefined" ? false : remember
  );
  window.sessionStorage.setItem("movai.session", true);
};

Authentication.deleteTokens = () => {
  // Cleanup...
  window.localStorage.removeItem("movai.token");
  window.localStorage.removeItem("movai.refreshToken");
  window.localStorage.removeItem("movai.tokenRemember");
  window.sessionStorage.removeItem("movai.session");
};

Authentication.login = async (
  username,
  password,
  remember = false,
  domain = INTERNAL_AUTHENTICATION
) => {
  try {
    Authentication.deleteTokens();

    const url = `/token-auth/`;
    const body = {
      username: username,
      password: password,
      remember: remember,
      domain
    };

    const response = await Authentication.request({ url, body });

    const { status } = response;
    const contentType = response.headers.get("content-type");
    const isJsonType = contentType?.includes("application/json");
    const data = isJsonType
      ? await response.json()
      : { error: response.statusText };

    if (status === 200) {
      Authentication.storeTokens(data, remember);
    }

    return data;
  } catch (e) {
    // Returns exception error message
    return { error: e.toString() };
  }
};

Authentication.logout = redirect => {
  Authentication.deleteTokens();
  window.location.replace(redirect || window.location.origin);
};

Authentication.checkLogin = async () => {
  const token = Authentication.getToken();
  const refreshToken = Authentication.getRefreshToken();
  const tokenRemember = Authentication.getRememberToken();
  const sessionFlag = Authentication.getSessionFlag();

  if (token === null || refreshToken === null) {
    return false;
  }

  try {
    const tokenData = jwtDecode(token);
    // Check if token expired
    if (tokenData["exp"] > new Date().getTime() / 1000) {
      return true;
    }
  } catch (e) {
    return false;
  }

  // Check SessionStorage flag
  if (tokenRemember == "false" && sessionFlag === null) {
    Authentication.logout();
    return false;
  }

  return await Authentication.refreshTokens();
};

Authentication.getProviders = () => {
  const headers = {
    "Content-Type": "application/json"
  };
  const url = `/status/`;
  return new Promise(resolve =>
    fetch(url, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error({ error: response.statusText });
        }
        return response
          .json()
          .then(resolve)
          .catch(error => {
            throw new Error({ error });
          });
      })
      .catch(error => {
        console.log("Error Fetching Providers: ", error);
        resolve({ domains: DEFAULT_PROVIDERS });
      })
  );
};

Authentication.request = ({ url, body }) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

Authentication.refreshTokens = async (remember = false) => {
  const refreshToken = Authentication.getRefreshToken();

  const url = `/token-refresh/`;
  const body = {
    token: refreshToken
  };

  return Authentication.request({ url, body })
    .then(response => {
      if (response.status != 200) {
        throw new Error("Not Allowed");
      }
      return response.json();
    })
    .then(data => {
      Authentication.storeTokens(data, remember);
      return true;
    })
    .catch(error => {
      Authentication.deleteTokens();
      return false;
    });
};

export default Authentication;
