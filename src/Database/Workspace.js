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
  const path = "v2/db/";

  return Rest.get({ path });
};

export default Workspace;
