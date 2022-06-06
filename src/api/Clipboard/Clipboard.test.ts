import Clipboard from "./Clipboard";

test("Read & Write clipboard", () => {
  Clipboard.write("test", 1);
  expect(Clipboard.read("test")).toBe(1);
});

test("Clear clipboard key", () => {
  Clipboard.write("test", 1);
  Clipboard.clear("test");
  expect("test" in new Clipboard()._data).toBe(false);
});

test("Copy Paste", () => {
  const object = { a: 1 };
  Clipboard.copy(object);
  expect(Clipboard.paste()).toMatchObject(object);
  // on purpose
  expect(Clipboard.paste()).toMatchObject(object);
});

test("Copy overwrite", () => {
  const object1 = { a: 1 };
  const object2 = { b: 1 };
  Clipboard.copy(object1);
  Clipboard.copy(object2);
  expect(Clipboard.paste()).toMatchObject(object2);
});
