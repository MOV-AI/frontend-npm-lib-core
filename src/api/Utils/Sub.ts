export
interface Sub<T extends any> {
  update: (val: T) => Promise<any>;
  subscribe: Function;
  data: {
    value: T;
  };
  makeEmit: (cb: Function) => (...args: any[]) => Promise<T>;
}

type setState<T extends any> = (newState: T) => void;

export
function makeSub<T extends any>(defaultData: T): Sub<T> {
  const subs = new Map<Function, boolean>();
  const valueMap = { value: defaultData };

  async function update(obj: T): Promise<T> {
    valueMap.value = obj;
    let allPromises = [] as any[];
    for (const [sub] of subs)
      allPromises.push(sub(obj));
    return obj;
  }

  function subscribe(sub: setState<T>) {
    subs.set(sub, true);
    sub(valueMap.value);
    return () => {
      subs.delete(sub);
    };
  }

  function makeEmit(cb: Function|undefined) {
    return async (...args: any[]) => {
      let value;

      try {
        value = await (cb ?? ((a: T) => a))(...args, valueMap.value);
      } catch (e) {
        return Promise.reject(null)
      }

      return update(value)
    };
  }

  return { update, subscribe, data: valueMap, makeEmit };
}
