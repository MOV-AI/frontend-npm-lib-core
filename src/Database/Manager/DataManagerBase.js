import _isEmpty from "lodash/isEmpty";
import { BehaviorSubject } from "rxjs";

export default class DataManagerBase {
  constructor() {
    this.models = {};
    this.db_states = Object.freeze({ error: -1, loading: 0, ready: 1 });
    this.isReady = 0;
    this._subject_state = new BehaviorSubject(0);
  }

  _initialize = () => {
    if (_isEmpty(this.models)) {
      throw new Error("No models added");
    }

    Object.keys(this.models).forEach(key => {
      const prop = key.charAt(0).toLowerCase() + key.slice(1);

      Object.defineProperty(this, prop, {
        get: () => {
          return this.models[key];
        }
      });
    });
    return this._subscribeModelsReady();
  };

  _subscribeModelsReady = () => {
    Object.keys(this.models).forEach(key => {
      this.models[key].onReady(() => this._setModelReady(key));
    });
    return this;
  };

  _setModelReady = model => {
    this.isReady += 1;
    if (this.isReady === Object.keys(this.models).length) {
      this._subject_state.complete();
    }
  };

  get db_state() {
    return this.isReady === Object.keys(this.models).length
      ? this.db_states.ready
      : this.db_states.loading;
  }

  onUpdate = (subscribeTo, callback) => {
    return subscribeTo.onUpdate(callback);
  };

  onReady = callback => {
    if (this.db_state !== this.db_states.ready) {
      this._subject_state.subscribe(
        () => {},
        () => {},
        () => callback()
      );
    } else {
      callback();
    }
  };
}
