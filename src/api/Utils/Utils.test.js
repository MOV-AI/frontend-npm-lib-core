import * as Utils from "./Utils";
/**
 * @jest-environment jsdom
 */

const { groupBy, range, maybeGet, ofNull, difference, flattenObject } = Utils;
test("group by", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dict = groupBy(array, (x) => x % 3);
  expect(dict).toStrictEqual({ 0: [3, 6, 9], 1: [1, 4, 7], 2: [2, 5, 8] });
});

test("range", () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array2 = [3, 4, 5, 6, 7, 8, 9];
  expect(range(10)).toStrictEqual(array);
  expect(range(3, 10)).toStrictEqual(array2);
  expect(range(10, 3)).toStrictEqual([]);
});

test("Maybe get", () => {
  const a = { b: { c: "alive" } };
  const cat = ofNull(a)
    .flatMap(maybeGet("b"))
    .flatMap(maybeGet("c"))
    .orSome("dead");

  const deadCat = ofNull(a)
    .flatMap(maybeGet("b"))
    .flatMap(maybeGet("d"))
    .orSome("dead");

  expect("alive").toStrictEqual(cat);
  expect("dead").toStrictEqual(deadCat);
});

test("Differences", () => {
  const a = { b: { c: "alive" } };
  const b = { b: { c: "alive" } };
  expect(difference(a, b)).toStrictEqual({});
  const c = { b: { c: "alive", d: "d" } };
  expect(difference(a, c)).toStrictEqual({ b: { d: "d" } });
  const d = JSON.parse(
    '{"RobotName":"basic","IP":"127.0.0.1","Alerts":{"TestAlert2":{"action":"TestAlert2 action","callback":"","info":"TestAlert2 info","name":"TestAlert2"},"TestAlert3":{"name":"TestAlert3","info":"TestAlert3 info","action":"TestAlert3 action","callback":""}},"Status":"","Parameter":{"battery":{"Value":37.369418240236804},"started":{"Value":true},"status":{"Value":"PAUSED"},"tf":{"Value":{"name":"base_link","position":{"x":12.262415990293931,"y":-2.297913922626347,"z":0},"orientation":{"x":0,"y":0,"z":0.6355858957405935,"w":0.7720301607681058},"child":[]}}},"Online":true}',
  );
  const e = JSON.parse(
    '{"RobotName":"basic","IP":"127.0.0.1","Alerts":{"TestAlert2":{"name":"TestAlert2","info":"TestAlert2 info","action":"TestAlert2 action","callback":""}},"Status":"","Parameter":{"battery":{"Value":37.369418240236804},"started":{"Value":true},"status":{"Value":"PAUSED"},"tf":{"Value":{"name":"base_link","position":{"x":12.262415990293931,"y":-2.297913922626347,"z":0},"orientation":{"x":0,"y":0,"z":0.6355858957405935,"w":0.7720301607681058},"child":[]}}},"Online":true}',
  );
  expect(Object.keys(flattenObject(difference(d, e)))).toStrictEqual([
    "Alerts",
  ]);
});
