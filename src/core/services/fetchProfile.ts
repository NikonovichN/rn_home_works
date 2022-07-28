import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';
import {Profile} from '../entities';

export async function fetchProfile(token: string): Promise<Profile> {
  const serverData = await axiosAPI.get(EndPoints.mockAccount, {
    headers: {Authorization: `Bearer ${token}`},
  });

  return serverData.data.data;
}
