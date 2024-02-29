import Rest from "../Rest/Rest";

const Snapshot = {};

/**
 * Create a snapshot from a specific document
 * Xparam {object} target Object with the following params
 * Xparam {object} source Object with the following params
 *  Xparam {string} workspace Target workspace where the document will be
 *  Xparam {string} type Type of the document
 *  Xparam {string} name Source name of the document
 *  Xparam {string} version Source version of the snapshot
 */
Snapshot._create = ({ target, body = {} }) => {
  const { workspace, type, name, version } = target;

  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.post({ path, body });
};

/**
 * Create a snapshot from a specific document
 * Xparam {object} target Object with the following params
 *  Xparam {string} workspace Target workspace where the document will be
 *  Xparam {string} type Type of the document
 *  Xparam {string} name Source name of the document
 *  Xparam {string} version Source version of the snapshot
 * Xparam {object} body Document data
 */
Snapshot.create = ({ target, body = {} }) => {
  Snapshot._create({ target, body: { data: body } });
};

/**
 * Create document by referencing an existing document
 * Xparam {object} target Object with the following params
 * Xparam {object} source Object with the following params
 *  Xparam {string} workspace Target workspace where the document will be
 *  Xparam {string} type Type of the document
 *  Xparam {string} name Source name of the document
 *  Xparam {string} version Source version of the snapshot
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
 * Xparam {string} workspace Workspace to read from
 * Xparam {string} type Type of the document
 * Xparam {string} name Name of the snapshot
 * Xparam {string} version Version of the snapshot
 */
Snapshot.read = ({ workspace, type, name, version }) => {
  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.get({ path });
};

/**
 * Create document in the global workspace
 * Xparam {object} target Object with the following params
 * Xparam {object} source Object with the following params
 *  Xparam {string} workspace Target workspace where the document will be
 *  Xparam {string} type Type of the document
 *  Xparam {string} name Source name of the document
 *  Xparam {string} version Source version of the snapshot
 */
Snapshot.restore = ({ target, source }) => {
  target.workspace = "global";

  return Snapshot.createByRef({ target, source });
};

/**
 * Get all the snapshots of a document
 * Xparam {string} workspace Workspace to read from
 * Xparam {string} type Type of the document
 * Xparam {string} name Name of the document
 */
Snapshot.getAll = ({ workspace, type, name }) => {
  const path = `v2/db/${workspace}/${type}/${name}`;

  return Rest.get({ path });
};

export default Snapshot;
