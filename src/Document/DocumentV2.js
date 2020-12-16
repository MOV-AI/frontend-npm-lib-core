import DocumentV1 from "./DocumentV1";
import Rest from "../Rest/Rest";

/**
 * Document class to use with the Rest api V2
 */
class DocumentV2 extends DocumentV1 {
  /**
   * Get document data
   */
  read = () => {
    const { workspace, type, name, version } = this;
    const path = `v2/db/${workspace}/${type}/${name}/${version}`;

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
    const { workspace, type, name, version } = this;
    const path = `v2/db/${workspace}/${type}/${name}/${version}`;

    return Rest.put({ path, body });
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
   */
  static create({ type, name, workspace }) {
    const path = `v2/db/${workspace}/${type}/${name}`;
    const body = { Label: name };

    return Rest.post({ path, body });
  }

  /**
   * Delete document or partial deletion of the document
   * @param {String} type Type of the document
   * @param {String} name Name of the document
   * @param {Object} body Data of the document
   * @param {String} workspace Workspace of the document
   */
  static delete({ type, name, body, workspace = "global" }) {
    const path = `v2/db/${workspace}/${type}/${name}`;

    return Rest.delete({ path, body });
  }

  /**
   * Get all existing documents in a workspace
   * @param {String} workspace workspace to search
   * @param {String} type filter documents by type
   */
  static getDocs({ workspace, type }) {
    const _type = type ? `/${type}` : "";
    const path = `v2/db/${workspace}${_type}`;

    return Rest.get({ path });
  }
}

export default DocumentV2;
