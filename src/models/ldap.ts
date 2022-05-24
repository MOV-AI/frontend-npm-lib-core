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

export interface LdapDomainUpdateModel extends LdapDomain {
  Password?: string;
}

export interface LdapDomainPostModel extends LdapDomainUpdateModel {}

export interface LdapDomainPutModel extends LdapDomainUpdateModel {}

export interface LdapUpdateResult {
  success: boolean;
  message?: string;
}
