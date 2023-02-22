import { createContext, useContext } from 'react';
import { UserInfo } from '../interfaces/ContextInterface';

export const UserInfoContext =
  createContext<UserInfo>({} as UserInfo);

export const useUserInfo = (): UserInfo => {
  return useContext<UserInfo>(UserInfoContext);
};
