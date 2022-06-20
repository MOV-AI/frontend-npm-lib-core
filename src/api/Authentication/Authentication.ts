import jwtDecode from "jwt-decode";
import {
  DecodedToken,
  INTERNAL_AUTHENTICATION,
  LoginPost,
  LoginResponse,
  NEW_TOKEN_VERSION_ID,
  STORAGE_KEYS,
  Token
} from "../../models/authentication";

export class AuthException {
  public message: string;
  public statusText: string;
  public name: string;
  constructor(message: string) {
    this.message = message;
    this.statusText = message;
    this.name = "AuthException";
  }
}

export default class Authentication {
  static DEFAULT_PROVIDER = INTERNAL_AUTHENTICATION;

  static getToken = () => {
    return window.localStorage.getItem(STORAGE_KEYS.TOKEN) || false;
  };

  static getRefreshToken = () => {
    return window.localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) || false;
  };

  static getRememberToken = () => {
    return window.localStorage.getItem(STORAGE_KEYS.TOKEN_REMEMBER) || false;
  };

  static decodeToken = (token: string | boolean) => {
    return jwtDecode<DecodedToken>(`${token}`);
  };

  static getTokenData = (): Token => {
    try {
      const token = Authentication.getToken();
      const decodedToken = Authentication.decodeToken(token);
      const tokenData: Token = {
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

  static isNewToken = (token: Token) => !!token[NEW_TOKEN_VERSION_ID];

  static getSessionFlag = () => {
    return window.sessionStorage.getItem(STORAGE_KEYS.SESSION) || false;
  };

  static storeTokens = (
    data: LoginResponse,
    remember: boolean,
    options = { storeRefreshToken: true }
  ) => {
    window.localStorage.setItem(STORAGE_KEYS.TOKEN, data["access_token"]);
    const refreshToken = data["refresh_token"];
    if (options.storeRefreshToken && refreshToken) {
      window.localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    }
    window.localStorage.setItem(STORAGE_KEYS.TOKEN_REMEMBER, `${remember}`);
    window.sessionStorage.setItem(STORAGE_KEYS.SESSION, `${true}`);
  };

  static deleteTokens = () => {
    window.localStorage.removeItem(STORAGE_KEYS.TOKEN);
    window.localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    window.localStorage.removeItem(STORAGE_KEYS.TOKEN_REMEMBER);
    window.sessionStorage.removeItem(STORAGE_KEYS.SESSION);
  };

  static login = async (
    username: string,
    password: string,
    remember = false,
    domain = INTERNAL_AUTHENTICATION
  ) => {
    try {
      Authentication.deleteTokens();

      const url = `/token-auth/`;
      const body: LoginPost = {
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
        Authentication.storeTokens(data as LoginResponse, remember);
      }

      return data;
    } catch (e) {
      console.warn("Error when trying to login: ", e);
      throw e;
    }
  };

  static logout = (redirect = "") => {
    Authentication.deleteTokens();

    window.location.replace(redirect || window.location.origin);
  };

  static checkLogin = async () => {
    const token = Authentication.getToken();
    const refreshToken = Authentication.getRefreshToken();
    const tokenRemember = Authentication.getRememberToken();
    const sessionFlag = Authentication.getSessionFlag();

    if (token === null || refreshToken === null) {
      return false;
    }

    try {
      const tokenData = Authentication.decodeToken(token);
      if (tokenData.exp > new Date().getTime() / 1000) {
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

  static getProviders = (): Promise<{ domains: string[] }> => {
    const headers = {
      "Content-Type": "application/json"
    };
    const url = `/domains/`;
    return new Promise(resolve =>
      fetch(url, { headers })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response
            .json()
            .then(resolve)
            .catch(error => {
              throw new Error(error.statusText);
            });
        })
        .catch(error => {
          console.warn("Error Fetching Providers: ", error);
          resolve({ domains: [INTERNAL_AUTHENTICATION] });
        })
    );
  };

  static request = (payload: { url: string; body: object }) => {
    return fetch(payload.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload.body)
    });
  };

  static refreshTokens = async (remember = false): Promise<boolean> => {
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
        Authentication.storeTokens(data, remember, {
          storeRefreshToken: false
        });
        return true;
      })
      .catch(_error => {
        Authentication.deleteTokens();
        return false;
      });
  };
}
