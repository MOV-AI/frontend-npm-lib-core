import Authentication from "../Authentication/Authentication";
const { checkLogin, AuthException } = Authentication;

const withAuth = (obj, props = {}) => {
  const handler = {
    shouldCheckLogin: ["search"],

    __checkLogin: (target, prop) => {
      return checkLogin().then(res => {
        if (!res) {
          throw new AuthException("Login error");
        }

        return Reflect.has(target, prop)
          ? Reflect.get(target, prop)
          : undefined;
      });
    },

    get: function (target, prop) {
      return this.shouldCheckLogin.includes(prop)
        ? this.__checkLogin(target, prop)
        : Reflect.get(target, prop);
    }
  };

  return new Proxy(Object.assign(obj, props), handler);
};

export default withAuth;
