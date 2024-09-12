import { ALPHANUMERIC_REGEX, GLOBAL_WORKSPACE } from "./constants";
import _isEmpty from "lodash/isEmpty";
import _isArray from "lodash/isArray";
import _isObject from "lodash/isObject";
import _transform from "lodash/transform";
import { deepEqual as equal } from "fast-equals";
import Role from "../Role/Role";

 export const ofNull = x => x !== null && x !== undefined ? x : null;

export const getter = prop => obj => obj[prop];

export const dot = f => g => x => f(g(x));

export const maybeGet = prop => obj => {
  const result = obj[prop];
  return result !== null && result !== undefined ? result : null;
};

export const range = (init, end) => {
  const start = end !== undefined ? init : 0;
  const stop = end !== undefined ? end : init;
  const ans = [];
  for (let j = start; j < stop; j++) ans.push(j);
  return ans;
};

export const randomInt = (a, b) => Math.floor(random(a, b));

export const random = (a, b) => {
  const init = b !== undefined ? a : 0;
  const end = b !== undefined ? b : a;
  return init + (end - init) * Math.random();
};

export const normalizeStr = str => {
  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

/**
 *
 * @param array
 * @param groupFunction : function x => group class;
 *
 * Usage example:
 *
 * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}
 */
export const groupBy = (array, groupFunction) => {
  const ans = {};
  array.forEach(x => {
    const key = groupFunction(x);
    if (!ans[key]) ans[key] = [];
    ans[key].push(x);
  });
  return ans;
};

// From https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Positive mod function
 */
export const mod = (x, n) => ((x % n) + n) % n;

/**
 * flatten an object
 * https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/flattenObject.md
 */
export const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";

    if (typeof obj[k] === "object" && !_isEmpty(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k]
    };

    return acc;
  }, {});

/**
 * Generate random Guid
 *
 * eg: acb3792a-bc9c-48fc-8dfc-92b6ddc0ec8c
 */
export const randomGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-mixed-operators
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Document name validation
 * @param {string} entityName
 * @param notAllowedWords
 * @param {string} regex
 * @returns {boolean} Result of validation
 */
export const validateEntityName = (
  entityName,
  notAllowedWords = ["__"],
  regex = ALPHANUMERIC_REGEX
) => {
  const validExpression = entityName.search(regex) !== -1;
  return (
    !_isEmpty(entityName) &&
    validExpression &&
    !notAllowedWords.includes(entityName.toLowerCase())
  );
};

/**
 * Return user roles
 * @param {object} user
 * @returns List of roles
 */
export const getUserRoles = user => {
  let userRoles = user.Role || user.roles || user.Roles;
  if (!Array.isArray(userRoles)) userRoles = [userRoles];
  return userRoles;
};

/**
 * Build permissions
 * @param {string} id
 * @param {object} user
 * @returns {[ResourcePermission]} List of permissions
 */
export const parseUserData = async user => {
  const resourcesParsedData = [];
  const userRoles = getUserRoles(user);
  const permissionsByResourceType = await getPermissionsByScope(
    userRoles
  );
  user.Resources = permissionsByResourceType;
  for (let [resourceType, resourcePermissions] of Object.entries(
    user.allResourcesPermissions
  )) {
    const hasUserResource = user?.Resources?.[resourceType] ?? false;
    const resource = {
      name: resourcePermissions.Label || resourceType,
      permissions: resourcePermissions.map(perm => {
        const rolePermValue =
          permissionsByResourceType[resourceType]?.includes(perm);
        let permValue = rolePermValue;
        if (hasUserResource !== false) {
          permValue = hasUserResource.includes(perm);
        }
        return {
          id: `${user.AccountName}-${resourceType}-${perm}`,
          name: perm,
          roleDefault: rolePermValue,
          resourceType: resourceType,
          value: permValue
        };
      })
    };
    resourcesParsedData.push(resource);
  }
  return resourcesParsedData;
};

/**
 * Get permissions by scope
 * @param {object} user
 * @returns {object} Dictionary with list of permissions by scope
 */
export const getPermissionsByScope = async userRoles => {
  const allRoles = await Role.getAll();
  return userRoles.reduce((prev, role) => {
    const selectedRoleResources = allRoles?.[role]?.Resources ?? {};
    Object.entries(selectedRoleResources).forEach(
      ([resourceType, permissions]) => {
        if (!prev[resourceType]) prev[resourceType] = [];
        prev[resourceType] = [...prev[resourceType], ...permissions];
      }
    );
    return prev;
  }, {});
};

const API_VERSION = "api/v1/apps";
const NEW_TAB = "_blank";
const SAME_TAB = "_self";

/**
 * loadLayout - loads the requested layout
 * @param {object} e application's object
 * @param {boolean} ctrlKey ctrlKey pressed
 *
 * Currently, the layout viewer is distributed in the mov-fe-app-ide package
 */
const loadLayout = (e, ctrlKey = false) => {
  globalThis.open(
    `${globalThis.location.origin}/${API_VERSION}/mov-fe-app-ide/?app_mode=1&layout_id=${e.URL}`,
    ctrlKey ? NEW_TAB : SAME_TAB
  );
};

/**
 * loads the requested application
 * @param {object} e application's object
 * @param {boolean} ctrlKey ctrlKey pressed
 */
const loadApplication = (e, ctrlKey = false) => {
  globalThis.open(
    `${globalThis.location.origin}/${API_VERSION}/${e.URL}/`,
    ctrlKey ? NEW_TAB : SAME_TAB
  );
};

/**
 * loads the requested external page
 * @param {object} e application's object
 */
const loadUrl = e => {
  globalThis.open(`${e.URL}`);
};

/**
 *  load resource by type
 * @param {object} event click event
 * @param {object} element resource data; must include Type, Package, EntryPoint
 */
export const loadResources = (event, element) => {
  const resourcesMap = {
    application: loadApplication,
    layout: loadLayout,
    external: loadUrl,
    default: loadUrl
  };
  const openInNew = event?.ctrlKey || event?.button === 1;
  const loader = resourcesMap[element?.Type] || resourcesMap.default;
  loader(element, openInNew);
};

/**
 * Maps new user password change model to old one
 * @param {object} body Object corresponding to either old or new password change model
 * @returns {object} Object corresponding to old model for V1 user
 */
export const mapToUserV1PasswordChangeModel = body => {
  const {
    current_password,
    CurrentPassword,
    new_password,
    NewPassword,
    confirm_password,
    ConfirmPassword
  } = body;
  return {
    current_password: current_password ?? CurrentPassword ?? "",
    new_password: new_password ?? NewPassword,
    confirm_password: confirm_password ?? ConfirmPassword
  };
};

/**
 * Find difference between two objects
 * @param  {object} origObj - Source object to compare newObj against
 * @param  {object} newObj  - New object with potential changes
 * @return {object} differences
 */
export const difference = (origObj, newObj) => {
  function changes(_newObj, _origObj) {
    let arrayIndexCounter = 0;
    return _transform(_newObj, function (result, value, key) {
      if (!equal(value, _origObj[key])) {
        let resultKey = _isArray(_origObj) ? arrayIndexCounter++ : key;
        result[resultKey] =
          _isObject(value) && _isObject(_origObj[key])
            ? changes(value, _origObj[key])
            : value;
      }
    });
  }
  return changes(newObj, origObj);
};

/**
 * Simple empty function
 */
export const emptyFunction = () => {
  /* Empty on purpose*/
};

/**
 * Returns the document name from an URL
 * @param {string} url
 * @returns {string}
 */
export function getNameFromURL(url) {
  if (!url) return "";
  const splittedUrl = url.split("/");
  return splittedUrl.length === 1 ? url : splittedUrl[2];
}

/**
 * Returns the document scope from an URL
 * @param {string} url
 * @returns {string}
 */
export function getScopeFromURL(url) {
  if (!url) return "";
  const splittedUrl = url.split("/");
  return splittedUrl[1];
}

/**
 * Returns the document workspace from an URL
 * @param {string} url
 * @returns {string}
 */
export function getWorkspaceFromUrl(url) {
  if (!url) return "";
  const splittedUrl = url.split("/");
  return splittedUrl[0];
}

/**
 * Returns the document version from an URL
 * @param {string} url
 * @returns {string}
 */
export function getVersionFromUrl(url) {
  if (!url) return "";
  const splittedUrl = url.split("/");
  return splittedUrl[3];
}

/**
 * Build a document path from a doc
 * @param {Document} doc
 * @returns
 */
export function buildDocPath(doc) {
  const { scope, name } = doc;
  const workspace = doc.workspace ?? GLOBAL_WORKSPACE;
  return `${workspace}/${scope}/${name}`;
}

/**
 * Generate random ID
 * @returns {string} Random ID in format : "1c76107c-146e-40bc-93fb-8148750cf50a"
 */
export const randomId = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

