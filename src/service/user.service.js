import { TEST_EMAIL, TEST_PASSWORD } from "../config";
import { HttpService } from "./base.service";

class UserService extends HttpService {
  /**
   * Get User Token
   */
  getUserToken = () =>
    this.post(`api/users/token/`, {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
    });
}

export const userService = new UserService();
