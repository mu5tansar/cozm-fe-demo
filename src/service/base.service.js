import axios from "axios";
import { PRODUCT_VERSION, API_ENDPOINT } from "../config";

export class HttpService {
  constructor() {
    axios.defaults.headers["Version"] = PRODUCT_VERSION;
  }
  /**
   * Set Token
   * @param token
   */
  static setToken(token = null) {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Fetch data from server
   * @param url Endpoint link
   * @return Promise
   */
  get = async (url, params) => {
    const test = await axios.get(`${API_ENDPOINT}/${url}`, {
      params,
    });

    return test;
  };
  /**
   * Write data over server
   * @param url Endpoint link
   * @param body Data to send over server
   * @return Promise
   */
  post = async (url, body, options = {}) => {
    const test = await axios.post(`${API_ENDPOINT}/${url}`, body, {
      ...options,
    });

    return test;
  };

  /**
   * Delete Data From Server
   * @param url Endpoint link
   * @param params Embed as query params
   * @return Promise
   */

  delete = (url, params, data) =>
    axios.delete(`${API_ENDPOINT}/${url}`, { params, data });

  /**
   * Update data on server
   * @param url Endpoint link
   * @param body Data to send over server
   * @param params Embed as query params
   * @return Promise
   */
  put = (url, body, params) =>
    axios.put(`${API_ENDPOINT}/${url}`, body, {
      ...params,
    });
}
