import BaseModel from "../Database/Models/BaseModel";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";

/**
 * Document class to use with the Rest api V1
 */
class DocumentV1 {
  constructor({ type, name, workspace = "global", version, path }) {
    this._init(type, name, workspace, version, path);
  }

  /** Initialization */
  _init = (type, name, workspace, version, path) => {
    this._parseArgs(workspace, type, name, version, path);
    this.subscriber = undefined;
    this.database = MasterDB;
    this.data = {};
  };

  /** Parse instance args */
  _parseArgs = (workspace, type, name, version, path) => {
    const [_workspace, _type, _name, _version] = (path || "").split("/");

    this.workspace = _workspace || workspace;
    this.type = _type || type;
    this.name = _name || name;
    this.version = _version || version;
  };

  /** Document properties */

  /**
   * Get document read only status
   */
  get readOnly() {
    return this.workspace !== "global";
  }

  /**
   * Get document url
   * Same as path
   */
  get url() {
    return this.path;
  }

  /**
   * Get document path
   */
  get path() {
    const { workspace, type, name, version } = this;
    return `${workspace}/${type}/${name}/${version}`;
  }

  /** Document handlers */

  /**
   * Get document data
   */
  read = () => {
    const { type, name } = this;
    const path = `v1/${type}/${name}/`;

    return Rest.get({ path }).then(data => {
      this.data = data;
      return data;
    });
  };

  /**
   * Update the document using PUT request
   * @param {Object} body Request payload
   */
  update = body => {
    const { type, name } = this;
    const path = `v1/${type}/${name}/`;

    return Rest.put({ path, body });
  };

  /** Subscribers */

  /**
   * Subscribe to document changes (notifications only available in the global workspace)
   * @param {Function} callback Callback to execute when the document is updated
   */
  subscribe = callback => {
    this.resubscribe(callback);
  };

  /**
   * Resubscribe to document changes (notifications only available in the global workspace)
   * @param {Function} callback Callback to execute when the document is updated
   */
  resubscribe = callback => {
    if (this.readOnly) return;

    this.unsubscribe();

    this.subscriber = new BaseModel({}, this.type, this.database, [
      { Scope: this.type, Name: this.name }
    ]);

    this.subscriber.onUpdate(() => {
      if (!this.subscriber) return;
      this.data = this.subscriber.get(this.name)?.obj || {};
      callback(this.data);
    });
  };

  /**
   * Unsubscribe from document changes
   */
  unsubscribe = () => {
    if (this.subscriber) this.subscriber.destroy();
    this.subscriber = null;
  };

  /** Static handlers */

  /**
   *
   * @param {String} type Type of the document
   * @param {String} name Name of the document
   */
  static create({ type, name, body = {} }) {
    const path = `v1/${type}/`;

    return Rest.post({ path, body: { data: { ...body, Label: name } } });
  }

  /**
   * Delete document or partial deletion of the document
   * @param {String} type Type of the document
   * @param {String} name Name of the document
   * @param {Object} body Data of the document
   */
  static delete({ type, name, body }) {
    const path = `v1/${type}/${name}/`;

    return Rest.delete({ path, body });
  }
}

export default DocumentV1;
