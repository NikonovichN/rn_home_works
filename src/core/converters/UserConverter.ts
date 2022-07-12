import {Authentication, UserAttributes, UserData} from '../entities/User';

export class UserConverter {
  static tokenConvertor = (data: any): Authentication => {
    return {
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in,
      refresh_token: data.refresh_token,
      created_at: data.created_at,
    };
  };

  static userConvertor = (data: any): UserData => {
    return {
      id: data.id,
      type: data.type,
      attributes: UserConverter.attributesConvertor(data.attributes),
    };
  };

  static attributesConvertor = (data: any): UserAttributes => {
    return {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    };
  };
}
