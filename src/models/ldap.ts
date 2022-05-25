export interface LdapResource {
  AccountName: string;
  CommonName: string;
  DomainName: string;
  ID: string;
  ObjectType: string;
  ReadOnly: boolean;
  Roles: string[];
  SuperUser: boolean;
  SendReport: boolean;
  _schema_version: string;
}

export interface LdapDomain {
  DomainName: string;
  GroupsDN: string;
  PrimaryHost: string;
  PrimaryPort: string | number;
  SecondaryHost: string;
  SecondaryPort: string | number;
  SSLVersion: number;
  Username: string;
  UsersDN: string;
  _schema_version?: string;
}

export interface LdapSearch {
  CommonName: string;
  AccountName: string;
  ID: string;
}

export interface LdapDomainUpdate extends LdapDomain {
  Password?: string;
}

export interface LdapDomainPost extends LdapDomainUpdate {}

export interface LdapDomainPut extends LdapDomainUpdate {}

export interface LdapUpdateResult {
  success: boolean;
  message?: string;
}

export type LdapResourceType = "user" | "group";
