import jwtDecode from "jwt-decode";

const Authentication = {};

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
    const message = jwtDecode(token).message;

    const tokenData = {
      message: message,
      auth_token: false,
      refresh_token: Authentication.getRefreshToken(),
      error: false,
      access_token: token
    };

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
  ldap = ""
) => {
  try {
    Authentication.deleteTokens();

    const url = `/token-auth/`;
    const body = {
      username: username,
      password: password,
      remember: remember
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

const INTERNAL_AUTHENTICATION = 0;
Authentication.DEFAULT_PROVIDER = INTERNAL_AUTHENTICATION;

Authentication.getProviders = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([
        { id: INTERNAL_AUTHENTICATION, text: "Internal" },
        { id: 1, text: "Ldap" }
      ]);
    }, 2000)
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
