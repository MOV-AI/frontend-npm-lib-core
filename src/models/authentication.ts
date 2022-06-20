export const NEW_TOKEN_VERSION_ID = "v2";

export const STORAGE_KEYS = {
  TOKEN: "movai.token",
  REFRESH_TOKEN: "movai.refreshToken",
  TOKEN_REMEMBER: "movai.tokenRemember",
  SESSION: "movai.session"
};

export const INTERNAL_AUTHENTICATION = "internal";
export const INTERNAL_AUTHENTICATIONS = [INTERNAL_AUTHENTICATION];

export interface DecodedToken {
  message: {
    name?: string;
    Superuser?: boolean;
    super_user?: boolean;
  };
  account_name: string;
  auth_token: boolean;
  error: boolean;
  refresh_token: string | boolean;
  access_token: string | boolean;
  super_user: boolean;
  domain_name: string;
  exp: number;
  [NEW_TOKEN_VERSION_ID]?: { domain_name: string };
}

export interface Token {
  message: { name: string; superUser: boolean };
  auth_token: boolean;
  error: boolean;
  refresh_token: string | boolean;
  access_token: string | boolean;
  [NEW_TOKEN_VERSION_ID]?: { domain_name: string };
}

export interface LoginPost {
  username: string;
  password: string;
  remember: boolean;
  domain?: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  error: boolean;
}
