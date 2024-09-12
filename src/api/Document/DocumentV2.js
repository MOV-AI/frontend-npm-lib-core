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
   * @param {object} body Request payload
   */
  update = body => {
    const { workspace, type, name, version } = this;
    const path = `v2/db/${workspace}/${type}/${name}/${version}`;

    return Rest.put({ path, body });
  };

  /** Snapshot handlers */

  /**
   *
   * @param trgWorkspace Workspace where to create the snapshot
   * @param version Snapshot version
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
   * @param type Type of the document
   * @param name Name of the document
   * @param workspace Workspace of the document
   */
  static create({ type, name, workspace }) {
    const path = `v2/db/${workspace}/${type}/${name}`;
    const body = { Label: name };

    return Rest.post({ path, body });
  }

  /**
   * Delete document or partial deletion of the document
   * @param type Type of the document
   * @param name Name of the document
   * @param body Data of the document
   * @param workspace Workspace of the document
   */
  static delete({ type, name, body, workspace = "global" }) {
    const path = `v2/db/${workspace}/${type}/${name}`;

    return Rest.delete({ path, body });
  }

  /**
   * Get all existing documents in a workspace
   * @param workspace workspace to search
   * @param type filter documents by type
   * @param id further filter documents by type and id
   */
  static getDocs = ({ workspace, scope, id }) => {
    const _scope = scope ? `/${scope}` : "";
    const _idPath = id ? `/${id}` : "";
    const _id = scope ? _idPath : "";
    const path = `v2/db/${workspace}${_scope}${_id}`;

    return Rest.get({ path });
  };
}

export default DocumentV2;
