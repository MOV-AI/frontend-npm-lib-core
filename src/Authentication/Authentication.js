import jwtDecode from "jwt-decode";

export const NEW_TOKEN_VERSION_ID = "v2";

const STORAGE_KEYS = {
  TOKEN: "movai.token",
  REFRESH_TOKEN: "movai.refreshToken",
  TOKEN_REMEMBER: "movai.tokenRemember",
  SESSION: "movai.session"
};

const Authentication = {};

const INTERNAL_AUTHENTICATION = "internal";
const NEW_INTERNAL_AUTHENTICATION = "internal2";
export const INTERNAL_AUTHENTICATIONS = [
  INTERNAL_AUTHENTICATION,
  NEW_INTERNAL_AUTHENTICATION
];

const DEFAULT_PROVIDERS = [INTERNAL_AUTHENTICATION];
Authentication.DEFAULT_PROVIDER = INTERNAL_AUTHENTICATION;

Authentication.AuthException = function (message) {
  this.message = message;
  this.statusText = message;
  this.name = "AuthException";
};

Authentication.getToken = () => {
  return window.localStorage.getItem(STORAGE_KEYS.TOKEN) || false;
};

Authentication.getRefreshToken = () => {
  return window.localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) || false;
};

Authentication.getRememberToken = () => {
  return window.localStorage.getItem(STORAGE_KEYS.TOKEN_REMEMBER) || false;
};

Authentication.getTokenData = () => {
  try {
    const token = Authentication.getToken();
    const decodedToken = jwtDecode(token);
    const tokenData = {
      message: {
        name: decodedToken.message?.name ?? decodedToken.account_name,
        superUser: decodedToken.message?.Superuser ?? decodedToken?.super_user
      },
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
      message: { name: "", superUser: false },
      auth_token: false,
      refresh_token: false,
      access_token: false,
      error: true
    };
  }
};

Authentication.isNewToken = token => !!token[NEW_TOKEN_VERSION_ID];

Authentication.getSessionFlag = () => {
  return window.sessionStorage.getItem(STORAGE_KEYS.SESSION) || false;
};

Authentication.storeTokens = (
  data,
  remember,
  options = { storeRefreshToken: true }
) => {
  window.localStorage.setItem(STORAGE_KEYS.TOKEN, data["access_token"]);
  const refreshToken = data["refresh_token"];
  if (options.storeRefreshToken && refreshToken) {
    window.localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }
  window.localStorage.setItem(
    STORAGE_KEYS.TOKEN_REMEMBER,
    remember == "undefined" ? false : remember
  );
  window.sessionStorage.setItem(STORAGE_KEYS.SESSION, true);
};

Authentication.deleteTokens = () => {
  // Cleanup...
  window.localStorage.removeItem(STORAGE_KEYS.TOKEN);
  window.localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  window.localStorage.removeItem(STORAGE_KEYS.TOKEN_REMEMBER);
  window.sessionStorage.removeItem(STORAGE_KEYS.SESSION);
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
  const url = `/domains/`;
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
      Authentication.storeTokens(data, remember, { storeRefreshToken: false });
      return true;
    })
    .catch(error => {
      Authentication.deleteTokens();
      return false;
    });
};

export default Authentication;
