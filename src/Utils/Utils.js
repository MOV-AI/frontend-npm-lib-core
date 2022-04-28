import { Maybe } from "monet";
import { ALPHANUMERIC_REGEX } from "./constants";
import _isEmpty from "lodash/isEmpty";
import Role from "../Role/Role";

const Utils = {};

Utils.ofNull = x => Maybe.fromNull(x);

Utils.getter = prop => obj => obj[prop];

Utils.dot = f => g => x => f(g(x));

Utils.maybeGet = prop => Utils.dot(Utils.ofNull)(Utils.getter(prop));

Utils.range = (init, end) => {
  const { i, e } = Maybe.fromNull(end)
    .map(x => ({ i: init, e: end }))
    .orSome({ i: 0, e: init });
  const ans = [];
  for (let j = i; j < e; j++) ans.push(j);
  return ans;
};

Utils.randomInt = (a, b) => Math.floor(Utils.random(a, b));

Utils.random = (a, b) => {
  const { init, end } = Maybe.fromNull(b)
    .map(x => ({ init: a, end: b }))
    .orSome({ init: 0, end: a });
  return init + (end - init) * Math.random();
};

Utils.normalizeStr = str => {
  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

/**
 *
 * @param {*} array
 * @param {*} groupFunction : function x => group class;
 *
 * Usage example:
 *
 * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}
 */
Utils.groupBy = (array, groupFunction) => {
  const ans = {};
  array.forEach(x => {
    const key = groupFunction(x);
    if (!ans[key]) ans[key] = [];
    ans[key].push(x);
  });
  return ans;
};

// From https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
Utils.capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Positive mod function
 */
Utils.mod = (x, n) => ((x % n) + n) % n;

/**
 * flatten an object
 * https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/flattenObject.md
 */
Utils.flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";

    if (typeof obj[k] === "object")
      Object.assign(acc, Utils.flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];

    return acc;
  }, {});

/**
 * Generate random Guid
 *
 * eg: acb3792a-bc9c-48fc-8dfc-92b6ddc0ec8c
 */
Utils.randomGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-mixed-operators
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Document name validation
 * @param {string} entityName
 * @param {[string]} notAllowedWords
 * @param {string} regex
 * @returns {boolean} Result of validation
 */
Utils.validateEntityName = (
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
 * @returns {[string]} List of roles
 */
Utils.getUserRoles = user => {
  let userRoles = user.Role || user.roles || user.Roles;
  if (!Array.isArray(userRoles)) userRoles = [userRoles];
  return userRoles;
};

/**
 * Build permissions
 * @param {string} id
 * @param {object} user
 * @returns {[object]} List of permissions
 */
Utils.parseUserData = async user => {
  const resourcesParsedData = [];
  const userRoles = Utils.getUserRoles(user);
  const permissionsByResourceType = await Utils.getPermissionsByScope(
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
          id: `${user.id}-${resourceType}-${perm}`,
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
Utils.getPermissionsByScope = async userRoles => {
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

/**
 * loadLayout - loads the requested layout
 * @param {object} e application's object
 * @param {boolean} ctrlKey ctrlKey pressed
 *
 * Currently, the layout viewer is distributed in the mov-fe-app-ide package
 */
Utils.loadLayout = (e, ctrlKey = false) => {
  window.open(
    `${window.location.origin}/api/v1/apps/mov-fe-app-ide/?app_mode=1&layout_id=${e.URL}`,
    ctrlKey ? "_blank" : "_self"
  );
};

/**
 * loads the requested application
 * @param {object} e application's object
 * @param {boolean} ctrlKey ctrlKey pressed
 */
Utils.loadApplication = (e, ctrlKey = false) => {
  window.open(
    `${window.location.origin}/api/v1/apps/${e.URL}/`,
    ctrlKey ? "_blank" : "_self"
  );
};

/**
 * loads the requested external page
 * @param {object} e application's object
 */
Utils.loadUrl = e => {
  window.open(`${e.URL}`);
};

/**
 *  load resource by type
 * @param {object} event click event
 * @param {object} element resource data; must include Type, Package, EntryPoint
 */
Utils.loadResources = (event, element) => {
  const resourcesMap = {
    application: loadApplication,
    layout: loadLayout,
    external: loadUrl,
    default: loadUrl
  };
  const openInNew = event.ctrlKey || event.button === 1;
  const loader = resourcesMap[element?.Type] || resourcesMap.default;
  loader(element, openInNew);
};

export default Utils;
