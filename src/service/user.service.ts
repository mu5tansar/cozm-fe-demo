import { AxiosPromise } from "axios";
import { TEST_EMAIL, TEST_PASSWORD } from "../config";
import { HttpService } from "./base.service";
interface UserToken {
  access: string;
}
class UserService extends HttpService {
  /**
   * Get User Token
   */
  getUserToken = (): AxiosPromise<UserToken> =>
    this.post(`api/users/token/`, {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
    });
}

export const userService = new UserService();
