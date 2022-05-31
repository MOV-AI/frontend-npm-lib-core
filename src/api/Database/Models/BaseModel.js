import { Subject, BehaviorSubject } from "rxjs";
import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";
import _omit from "lodash/omit";
import _merge from "lodash/merge";

import Utils from "../../Utils/Utils";
//import RestApi from "../../RestApi";

export default class BaseModel {
  constructor(manager, model, database, patterns) {
    this.db_states = Object.freeze({ error: -1, loading: 0, ready: 1 });
    this.db = database;
    this.model = model;
    this.manager = manager;

    this._subject = new Subject();
    this._cache = new Map();
    this._subject_state = new BehaviorSubject(0);
    this._db_state = this.db_states.loading;

    this.patterns = this._validatePatterns(patterns);
    this.nr_patterns = this.patterns.length;

    //this.api = new RestApi(this.model);

    this._initialize();
  }

  _initialize = () => {
    this.patterns.forEach(pattern => this._subscribe(pattern));

    return this;
  };

  _subscribe = pattern => {
    this.db.subscribe(
      pattern,
      data => this._onDataChange(data),
      data => this._onDataLoad(data)
    );
  };

  _validatePatterns = patterns => {
    const default_pattern = { Scope: this.model, Name: "*" };
    const _patterns = patterns ? patterns : default_pattern;
    return Array.isArray(_patterns) ? _patterns : [_patterns];
  };

  get db_state() {
    return this._db_state;
  }

  set db_state(value) {
    if (value !== this._db_state) {
      this._db_state = value;
      if (value !== this.db_states.ready) {
        this._subject_state.next(value);
      } else {
        this._subject_state.complete();
      }
    }
  }

  get = id => {
    return this._cache.get(id);
  };

  getAll = () => {
    return this._cache.values();
  };

  _get_or_create = key => {
    return (
      this.get(key) ||
      this.add(key, {
        name: key,
        obj: {},
        id: key
      }).get(key)
    );
  };

  add = (key, data) => {
    return this._cache.set(key, data);
  };

  remove = key => {
    this._cache.delete(key);
  };

  destroy = () => {
    this.patterns.forEach(pattern => this.db.unsubscribe(pattern));
  };

  /**
   * removes empty objects, returning changed object
   */
  removeEmpty = (obj, path) => {
    let new_obj = null;

    if (_isEmpty(_get(obj, path, {}))) {
      // remove empty
      new_obj = _omit(obj, path);

      const up_path = path.split(".");
      // check up level is empty
      if (up_path.length > 1) {
        new_obj = this.removeEmpty(new_obj, up_path.slice(0, -1).join("."));
      }
    }

    return new_obj || obj;
  };

  /**
   *    Events
   */

  _onDataChange = data => {
    const obj = _get(data, `key.${this.model}`, {});

    Object.keys(obj).forEach(key => {
      const entry = this._get_or_create(key);

      if (data.event === "del") {
        // deleting an entry
        const path = Object.keys(Utils.flattenObject(obj[key]))[0];

        entry.obj = this.removeEmpty(_omit(entry.obj, path), path);

        // completly remove object
        if (_isEmpty(entry.obj)) {
          this.remove(key);
        }
      } else {
        // updating an entry
        _merge(entry.obj, obj[key]);
      }

      this._subject.next({ data: entry, event: data.event });
    });
  };

  _onDataLoad = data => {
    const obj = _get(data, `value.${this.model}`, {});

    Object.keys(obj).forEach(key => {
      /*this.add(key, {
        obj: obj[key],
        id: key
      });*/
      const entry = this._get_or_create(key);
      _merge(entry.obj, obj[key]);
    });

    if (--this.nr_patterns <= 0) {
      this.db_state = this.db_states.ready;
    }
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

  onUpdate = callback => {
    this._subject.subscribe(callback);
  };
}
