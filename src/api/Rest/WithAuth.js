import Authentication, {
  AuthException
} from "../Authentication/Authentication";
const { checkLogin, getToken } = Authentication;

const withAuth = (obj, props = {}) => {
  const handler = {
    __checkLogin: (target, prop) => {
      return async args => {
          const res = await checkLogin();
          // check login error
          if (!res)
            throw new AuthException("Login error");

          // inject authorization headers
          const customHeaders = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
          };

          // return the original call with custom headers and original arguments
          return Reflect.get(target, prop)({ customHeaders, ...args });
      }
    },

    get: function (target, prop) {
      return this.__checkLogin(target, prop);
    }
  };

  return new Proxy(Object.assign(obj, props), handler);
};

export default withAuth;
