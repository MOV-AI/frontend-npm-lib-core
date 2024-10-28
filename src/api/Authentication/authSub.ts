import Authentication from "./Authentication";
import { User } from "./../User/User";
import { Sub } from "@mov-ai/mov-fe-lib-sub";

export interface LoginData {
  username: string;
  password: string;
  remember: any;
  selectedProvider: any;
}

interface LoginSub {
  loggedIn: boolean;
  currentUser: any;
  loading: boolean;
  providers: { domains: string[] };
}

// export
const loggedOutInfo = {
  loggedIn: false,
  currentUser: null,
  loading: false,
  providers: { domains: [] },
};

export const authSub = new Sub<LoginSub>(loggedOutInfo);
globalThis.authSub = authSub;

const authEmitSync = authSub.makeEmit();

async function authEmit() {
  authEmitSync({ ...loggedOutInfo, loading: true });

  {
    const user = new User().getCurrentUserWithPermissions();

    const [loggedIn, currentUserBare] = await Promise.all([
      Authentication.checkLogin(),
      user,
    ]);

    console.assert(currentUserBare);

    const currentUser = {
      ...currentUserBare,
      roles: currentUserBare.Roles.reduce(
        (a, role) => ({ ...a, [role]: true }),
        {},
      ),
    };

    if (loggedIn)
      return authEmitSync({
        loggedIn: true,
        providers: await Authentication.getProviders(),
        currentUser,
        loading: false,
      });

    const [providers, res] = await Promise.all([
      Authentication.getProviders(),
      Authentication.refreshTokens(),
    ]);

    return authEmitSync({
      loggedIn: res,
      providers,
      currentUser,
      loading: false,
    });
  }
}

function auth() {
  (authEmit() as Promise<LoginSub>).catch((e) => {
    console.error("Auth Error", e?.message);
    authSub.update({ ...loggedOutInfo, loading: false });
  });
}

if (!(globalThis as any).mock) auth();

export async function login({
  username,
  password,
  remember,
  selectedProvider,
}: LoginData) {
  const apiResponse = await Authentication.login(
    username,
    password,
    remember,
    selectedProvider,
  );

  if (apiResponse.error) throw new Error(apiResponse.error);
  auth();
}
