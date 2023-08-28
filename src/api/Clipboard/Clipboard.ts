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

  static clear(key: string): void {
    const inst = new Clipboard();
    if (key) delete inst._data[key];
  }

  static read(key: string | number): any {
    // consider return a maybe
    const inst = new Clipboard();
    return key ? inst.data[key] : inst.data;
  }

  static write(key: string | number, value: any) {
    return (new Clipboard()._data[key] = value);
  }

  /**
   * Copies value
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
