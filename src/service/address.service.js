import { HttpService } from "./base.service";

class AddressService extends HttpService {
  /**
   * Get Address By Company Name
   */
  getAddressByCompany = (parmas) =>
    this.get(`api/personas/address-search`, parmas);
}

export const addressService = new AddressService();
