import { AxiosPromise } from "axios";
import { HttpService } from "./base.service";

export interface CompanyAddress {
  name: string;
  street_name: string;
  house_number: string;
  postal_code: string;
  city: string;
  country: string;
  website: string;
  phone: string;
}

class AddressService extends HttpService {
  /**
   * Get Address By Company Name
   */
  getAddressByCompany = (parmas: object): AxiosPromise<CompanyAddress[]> =>
    this.get(`api/personas/address-search`, parmas);
}

export const addressService = new AddressService();
