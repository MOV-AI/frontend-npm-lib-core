import Rest from "../Rest/Rest";
import {
  RoleModel,
  RolesMap,
  RoleUpdateModel,
  RoleUpdateResult
} from "../../models/role";

const ROLE_API_ROUTE = "v2/Role/";

class Role {
  static getAll = (): Promise<RolesMap> =>
    Rest.get({
      path: ROLE_API_ROUTE
    });

  static get = (id: string): Promise<RoleModel> =>
    Rest.get({ path: `${ROLE_API_ROUTE}${id}/` });

  static create = (model: RoleUpdateModel): Promise<RoleUpdateResult> =>
    Rest.post({ path: ROLE_API_ROUTE, body: model });

  static update = (
    roleName: string,
    model: RoleUpdateModel
  ): Promise<RoleUpdateResult> =>
    Rest.post({ path: `${ROLE_API_ROUTE}${roleName}/`, body: model });

  static delete = (id: string): Promise<RoleUpdateResult> =>
    Rest.delete({ path: `${ROLE_API_ROUTE}${id}/` });
}

export default Role;
