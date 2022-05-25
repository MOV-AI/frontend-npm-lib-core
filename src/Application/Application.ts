import Rest from "../Rest/Rest";
import { Application as ApplicationModel } from "../models/application";

class Application {
  static getAll = (): Promise<ApplicationModel> =>
    Rest.get({ path: `v1/applications/` });
}

export default Application;
