import Rest from "../Rest/Rest";

class Application {
  /**
   * Get all
   * @returns {Promise<array>} List with all apps
   */
  static getAll = () => {
    return Rest.get({ path: `v1/applications/` });
  };
}

export default Application;
