import { LoginResponseType, UserInfoType } from "../../apis/types/AuthType";

export interface IAuthState {
  authData: LoginResponseType | null;
  userInfo?: UserInfoType | null;
  is_loading: boolean;
  is_loading_get_me: boolean;
}
