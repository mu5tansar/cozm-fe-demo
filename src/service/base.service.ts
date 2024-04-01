import axios, { CancelTokenStatic, CancelTokenSource } from "axios";
import { API_ENDPOINT, PRODUCT_VERSION } from "../config";

export class HttpService {
  CancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
    //@ts-ignore
    axios.defaults.headers["Version"] = PRODUCT_VERSION;
  }

  /**
   * Set Token On Header
   * @param token
   */
  static setToken(token: string): void {
    (axios as any).defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Fetch data from server
   * @param url Endpoint link
   * @return Promise
   */
  protected get = async (url: string, params?: any): Promise<any> => {
    const test = await axios.get(`${API_ENDPOINT}/${url}`, {
      params,
      cancelToken: this.source.token,
    });

    return test;
  };
  /**
   * Write data over server
   * @param url Endpoint link
   * @param body Data to send over server
   * @return Promise
   */
  protected post = async (
    url: string,
    body: any,
    options = {}
  ): Promise<any> => {
    const test = await axios.post(`${API_ENDPOINT}/${url}`, body, {
      ...options,
      cancelToken: this.source.token,
    });

    return test;
  };

  /**
   * Delete Data From Server
   * @param url Endpoint link
   * @param params Embed as query params
   * @return Promise
   */

  protected delete = (url: string, params?: any, data?: any): Promise<any> =>
    axios.delete(`${API_ENDPOINT}/${url}`, { params, data });

  /**
   * Update data on server
   * @param url Endpoint link
   * @param body Data to send over server
   * @param params Embed as query params
   * @return Promise
   */
  protected put = (url: string, body?: any, params?: any): Promise<any> =>
    axios.put(`${API_ENDPOINT}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  };
}
