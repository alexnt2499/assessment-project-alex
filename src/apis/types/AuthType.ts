export interface LoginParamsType {
  client_id: string;
  client_secret: string;
  grant_type: string;
  username: string;
  password: string;
  scope: string;
}

export interface LoginResponseType {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
}

export interface UserInfoType {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  lastLoginAt: string;
  contacts: any[];
  addresses: any[];
  listCustomFields: ListCustomField[];
  employmentDetails: any[];
  memberships: Membership[];
  kycDetails: KycDetails;
  apps: App[];
  listRoles: string[];
  permissions: any[];
  createdAt: string;
  passwordExpired: boolean;
  updatedAt: string;
}

export interface ListCustomField {
  customFieldId: string;
  customKey: string;
  customValue: string;
}

export interface Membership {
  membershipId: string;
  organisationId: string;
  roleName: string;
  token: string;
}

export interface KycDetails {
  documents: any[];
}

export interface App {
  appName: string;
}
