/**
 * Clipboard singleton
 */
export default class Clipboard {
  static instance: any;
  _data: any;
  copyKey!: number;

  constructor() {
    if (Clipboard.instance) return Clipboard.instance;
    Clipboard.instance = this;
    this._data = {};
    this.copyKey = Math.random();
  }

  /**
   *  get clipboard data
   */
  get data() {
    return this._data;
  }

  /**
   *
   * Xparam {string} key base key to clear
   */
  static clear(key: string): void {
    const inst = new Clipboard();
    if (key) delete inst._data[key];
  }

  /**
   *
   * Xparam {string} key base key to read
   */
  static read(key: string | number): any {
    const inst = new Clipboard();
    return key ? inst.data[key] : inst.data;
  }

  /**
   *
   * Xparam {string} key base key to write
   * Xparam {any} value object, primitive, etc, to write
   */
  static write(key: string | number, value: any) {
    return (new Clipboard()._data[key] = value);
  }

  /**
   * Copies value
   * Xparam {*} value
   */
  static copy(value: any) {
    Clipboard.write(new Clipboard().copyKey, value);
  }

  /**
   * Retrieve copied object
   */
  static paste() {
    // consider making deep copy
    return Clipboard.read(new Clipboard().copyKey);
  }
}
