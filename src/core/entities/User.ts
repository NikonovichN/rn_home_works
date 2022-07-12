export interface Authentication {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  created_at: number;
}

export interface UserData {
  id: string;
  type: string;
  attributes: UserAttributes;
}

export interface UserAttributes {
  email: string;
  first_name: string;
  last_name: string;
}
