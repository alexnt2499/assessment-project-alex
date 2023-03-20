import ApiClientBase from "../ApiClientBase";
import {
  LoginParamsType,
  LoginResponseType,
  UserInfoType,
} from "../types/AuthType";
import qs from "qs";
import { AuthBaseResponseType } from "../types/BaseType";

class ApiAuth extends ApiClientBase {
  constructor() {
    super();
    this.instance.defaults.headers["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  /**
   * Login
   */
  public async login(params: LoginParamsType): Promise<LoginResponseType> {
    const res = await this.instance.post("/token", qs.stringify(params));
    return res.data;
  }

  /**
   * get info user
   */
  public async getMe(
    access_token: string
  ): Promise<AuthBaseResponseType<UserInfoType>> {
    console.log(access_token);

    const res = await this.instance.get("/membership-service/1.2.0/users/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res.data;
  }
}

export default ApiAuth;
