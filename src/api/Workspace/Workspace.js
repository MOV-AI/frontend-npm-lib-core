import Rest from "../Rest/Rest";

const Workspace = {};

Workspace.create = () => {
  throw new Error("Not implemented");
};
Workspace.delete = () => {
  throw new Error("Not implemented");
};

/**
 * Get a list of all locally available workspaces
 */
Workspace.getAll = () => {
  const path = "v2/db";

  return Rest.get({ path });
};

/**
 * Get all existing documents in a workspace
 * @param {String} workspace - workspace to search
 * @param {String} type - filter documents by type
 * @param {String} id - further filter documents by type and id
 */
Workspace.getDocs = ({ workspace, scope, id }) => {
  const _scope = scope ? `/${scope}` : "";
  const _id = scope ? (id ? `/${id}` : "") : "";
  const path = `v2/db/${workspace}${_scope}${_id}`;

  return Rest.get({ path });
};

export default Workspace;
