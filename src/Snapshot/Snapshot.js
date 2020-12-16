import Rest from "../Rest/Rest";

const Snapshot = {};

/**
 * Create a snapshot from a specific document
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */
Snapshot._create = ({ target, body = {} }) => {
  const { workspace, type, name, version } = target;

  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.post({ path, body });
};

/**
 * Create a snapshot from a specific document
 * @param {Object} target Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 * @param {Object} body Document data
 */
Snapshot.create = ({ target, body = {} }) => {
  Snapshot._create({ target, body: { data: body } });
};

/**
 * Create document by referencing an existing document
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */
Snapshot.createByRef = ({ target, source }) => {
  const body = {
    src: `${source.workspace}/${source.type}/${source.name}/${source.version}`
  };

  return Snapshot._create({ target, source, body });
};

/**
 * Delete a specific snapshot
 */
Snapshot.delete = () => {
  throw new Error("Not implemented");
};

/**
 * Get the data of a snapshot
 * @param {String} workspace Workspace to read from
 * @param {String} type Type of the document
 * @param {String} name Name of the snapshot
 * @param {String} version Version of the snapshot
 */
Snapshot.read = ({ workspace, type, name, version }) => {
  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.get({ path });
};

/**
 * Create document in the global workspace
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */
Snapshot.restore = ({ target, source }) => {
  target.workspace = "global";

  return Snapshot.createByRef({ target, source });
};

/**
 * Get all the snapshots of a document
 * @param {String} workspace Workspace to read from
 * @param {String} type Type of the document
 * @param {String} name Name of the document
 */
Snapshot.getAll = ({ workspace, type, name }) => {
  const path = `v2/db/${workspace}/${type}/${name}`;

  return Rest.get({ path });
};

export default Snapshot;
