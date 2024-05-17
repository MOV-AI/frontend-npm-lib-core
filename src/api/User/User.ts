import Authentication from "../../api/Authentication/Authentication";
import Permissions from "../Permission/Permission";
import { Utils } from "../index";
import InternalUser from "./InternalUser";
import Role from "../Role/Role";
import UserV1 from "./UserV1";
import AclUser from "./AclUser";
import Application from "../Application/Application";
import { PermissionType } from "../../models/permission";
import {
  INTERNAL_AUTHENTICATIONS,
  NEW_TOKEN_VERSION_ID,
  Token
} from "../../models/authentication";
import {
  ChangePassword,
  ResetPassword,
  UserModel as UserModel,
  UserPost,
  UserPut
} from "../../models/user";

type UserType = UserV1 | InternalUser | AclUser;
export class User {
  private tokenData: Token;
  private instance: UserType;

  constructor() {
    this.tokenData = Authentication.getTokenData();
    this.instance = new (this.getUserClass())();
  }

  /**
   * Get all apps
   * @returns {Promise<array>} List with all apps
   */
  getAllApps = () => {
    return Application.getAll();
  };

  /**
   * Get user class
   * @returns the class which the user belongs
   */
  getUserClass = () => {
    if (!Authentication.isNewToken(this.tokenData)) return UserV1;
    if (this.isInternalUser()) return InternalUser;
    return AclUser;
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Public Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Get user data
   * @returns {Promise<User>}
   */
  getData = async (): Promise<InternalUser> => {
    return this.instance.getData();
  };

  /**
   * Get allowed apps
   * @returns {Promise<array>} List of allowed apps
   */
  getAllowedApps = async () => {
    return this.instance.getAllowedApps();
  };

  getCurrentUserWithPermissions = async () => {
    const userWithPermissions =
      await this.instance.getCurrentUserWithPermissions();
    return userWithPermissions;
  };

  /**
   * Get authenticated username
   * @returns {string} username
   */
  getUsername = () => {
    return this.instance.getUsername();
  };

  /**
   * Parse token to get superuser information
   * @returns {boolean}
   */
  isSuperUser = async () => {
    return this.instance.isSuperUser();
  };

  /**
   * Checks if user is internal
   * @returns {string} username
   */
  isInternalUser = () => {
    if (!Authentication.isNewToken(this.tokenData)) return true;
    const { domain_name: domainName } = this.tokenData[
      NEW_TOKEN_VERSION_ID
    ] || { domain_name: "" };
    return INTERNAL_AUTHENTICATIONS.includes(domainName);
  };

  /**
   * Change user password
   * @param {{current_password: string, new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  changePassword = (body: ChangePassword) => {
    return this.instance.changePassword(body);
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Reset user password
   * @param {string} userId : userId to change password
   * @param {{new_password: string, confirm_password: string}} body : Request body
   * @returns {Promise} Response promise
   */
  static resetPassword = (userId: string, body: ResetPassword) => {
    return InternalUser.resetPassword(userId, body);
  };

  /**
   * Adds the roles and old permissions properties to a user
   * @returns {{ allRoles: [object], allResourcesPermissions: object, resourcesPermissions: object}} returns the user with permissions dictionaries
   */
  static withPermissions = async (user: UserModel) => {
    user.allRoles = await Role.getAll();
    user.allResourcesPermissions = await Permissions.getAll();
    user.resourcesPermissions = await Utils.parseUserData(user);
    return user;
  };

  /**
   * Check if user has permission for a resource operation
   * @param {{SuperUser: boolean, Resources: object }} user : The User
   * @param {string} resource : Resource or Scope
   * @param {string} operation :  The operation on the scope - "read", "write", "create" or "delete"
   * @returns {boolean} true if user has permission
   */
  static hasPermission = (
    user: UserModel,
    resource: string,
    operation: PermissionType
  ) => {
    if (user.Superuser) return true;
    return (user.Resources?.[resource] || []).includes(operation);
  };

  /**
   * Create a new User entity
   * @param {{AccountName: string, Password: string, Roles: [string], CommonName: string, Email: string, ReadOnly: boolean, SuperUser: boolean, SendReport: boolean }} model : The User Post model
   */
  static create = (model: UserPost) => InternalUser.create(model);

  /**
   * Update a new User
   * @param {{AccountName: string, Password: string, Roles: [string], CommonName: string, Email: string, ReadOnly: boolean, SuperUser: boolean, SendReport: boolean }} model : The User Put model
   */
  static update = (userId: string, model: UserPut) =>
    InternalUser.update(userId, model);
}
