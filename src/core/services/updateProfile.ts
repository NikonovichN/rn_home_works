import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';
import {Profile, ProfileUpdate} from '../entities';

export async function updateProfile(
  token: string,
  body: ProfileUpdate,
): Promise<Profile> {
  const serverData = await axiosAPI.post(EndPoints.mockAccount, {
    headers: {Authorization: `Bearer ${token}`},
    body: JSON.stringify(body),
  });

  return serverData.data;
}
