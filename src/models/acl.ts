import { LdapResourceType } from "./ldap";

interface AclUpdate {
  AccountName: string;
  ID: string;
  Roles: string[];
  SuperUser: boolean;
  ReadOnly: boolean;
  SendReport: boolean;
}

export interface AclPost extends AclUpdate {
  CommonName: string;
}

export interface AclPut extends AclUpdate {}

export interface AclDeleteModel {
  AccountName: string;
  ID: string;
}

export interface Acl {
  AccountName: string;
  CommonName: string;
  DomainName: string;
  ID: string;
  LastUpdate: number;
  ObjectType: LdapResourceType;
  ReadOnly: boolean;
  Roles: string[];
  SendReport: boolean;
  SuperUser: boolean;
}

export interface AclList {
  [id: string]: Acl;
}

export interface AclPutResult {
  success: boolean;
}

export interface AclBatchResult {
  [accountName: string]: { success: boolean };
}
