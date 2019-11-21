import { Maybe } from "monet";

const Utils = {};

Utils.ofNull = x => Maybe.fromNull(x);

Utils.range = (init, end) => {
  const ans = [];
  for (let i = 0; i < end; i++) ans.push(i);
  return ans;
};

Utils.randomInt = (a, b) => {
  return Math.floor(a + (b - a) * Math.random());
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

export default Utils;
