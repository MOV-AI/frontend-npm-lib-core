import Rest from "../Rest/Rest";

const Snapshot = {};

/**
 * Create a snapshot from a specific document
 */
Snapshot._create = ({ target, body = {} }) => {
  const { workspace, type, name, version } = target;

  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.post({ path, body });
};

/**
 * Create a snapshot from a specific document
 */
Snapshot.create = ({ target, body = {} }) => {
  Snapshot._create({ target, body: { data: body } });
};

/**
 * Create document by referencing an existing document
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
 */
Snapshot.read = ({ workspace, type, name, version }) => {
  const path = `v2/db/${workspace}/${type}/${name}/${version}`;

  return Rest.get({ path });
};

/**
 * Create document in the global workspace
 */
Snapshot.restore = ({ target, source }) => {
  target.workspace = "global";

  return Snapshot.createByRef({ target, source });
};

/**
 * Get all the snapshots of a document
 */
Snapshot.getAll = ({ workspace, type, name }) => {
  const path = `v2/db/${workspace}/${type}/${name}`;

  return Rest.get({ path });
};

export default Snapshot;
