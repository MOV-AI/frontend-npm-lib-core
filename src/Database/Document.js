import BaseModel from "./Models/BaseModel";
import MasterDB from "./MasterDB";
import Rest from "../Rest/Rest";
import Snapshot from "./Snapshot";

class Document {
  constructor({
    type,
    name,
    workspace = "global",
    version,
    uri,
    apiVersion = "v1"
  }) {
    this._init(type, name, workspace, version, uri, apiVersion);
  }

  /** Initialization */
  _init = (type, name, workspace, version, uri, apiVersion) => {
    this._parseArgs(workspace, type, name, version, uri);
    this.subscriber = undefined;
    this.database = MasterDB;
    this.data = {};
    this.apiVersion = apiVersion; //v1 || v2
  };

  /** Parse instance args */
  _parseArgs = (workspace, type, name, version, uri) => {
    const [_workspace, _type, _name, _version] = (uri || "").split("/");

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
    return Boolean(this.version);
  }

  /** Document handlers */

  /**
   * Get document data
   */
  read = () => {
    const { workspace, type, name, version, apiVersion } = this;

    const paths = {
      v1: `v1/${type}/${name}/`,
      v2: `v2/db/${workspace}/${type}/${name}/${version}/`
    };
    const path = paths[apiVersion];

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
    const { type, name, apiVersion } = this;

    const paths = {
      v1: `v1/${type}/${name}/`,
      v2: `v2/db/${workspace}/${type}/${name}/${version}/`
    };
    const path = paths[apiVersion];

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

  /** Snapshot handlers */

  /**
   *
   * @param {String} trgWorkspace Workspace where to create the snapshot
   * @param {String} version Snapshot version
   */
  createSnapshot = ({ trgWorkspace, version }) => {
    const { workspace, type, name } = this;

    return Snapshot.create({
      trgWorkspace,
      srcWorkspace: workspace,
      type,
      name,
      version
    });
  };

  /**
   * Get list of snapshots for the current document in the current workspace
   */
  getSnapShots = () => {
    const { workspace, type, name } = this;

    return Snapshot.getAll({
      workspace,
      type,
      name
    });
  };

  /** Static handlers */

  /**
   *
   * @param {String} type Type of the document
   * @param {String} name Name of the document
   * @param {String} workspace Workspace of the document
   * @param {String} version Version of the document
   */
  static create({ type, name, apiVersion = "v1", workspace }) {
    const paths = {
      v1: `v1/${type}/`,
      v2: `v2/db/${workspace}/${type}/${name}/`
    };
    const path = paths[apiVersion];

    const bodies = {
      v1: { data: { Label: name } },
      v2: { Label: name }
    };
    const body = bodies[apiVersion];

    return Rest.post({ path, body });
  }

  /**
   * Delete document or partial deletion of the document
   * @param {String} type Type of the document
   * @param {String} name Name of the document
   * @param {Object} body Data of the document
   */
  static delete({ type, name, body, apiVersion = "v1", workspace = "global" }) {
    const paths = {
      v1: `v1/${type}/${name}/`,
      v2: `v2/db/${workspace}/${type}/${name}/`
    };
    const path = paths[apiVersion];

    return Rest.delete({ path, body });
  }

  /**
   * Get all existing documents in a workspace
   * @param {String} workspace workspace to search
   * @param {String} type filter documents by type
   */
  static getAll({ workspace, type }) {
    const _type = type ? `${type}/` : "";
    const path = `v2/db/${workspace}/${_type}`;

    return Rest.get({ path });
  }
}

export default Document;
