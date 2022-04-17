import { api, log, BASE_URL, ENDPOINTS } from '.';

export default class APIProductsService {
  static async getAllProducts() {
    try {
      const response = await api.get(`${BASE_URL}${ENDPOINTS.products}`);
      const data = await response.json();
      log('info', '[PRODUCTS] Get all products response: ', data);
      return data;
    } catch (err) {
      const error = await err.response.json();
      log('error', '[PRODUCTS] Get all products error: ', error);
      throw error;
    }
  }
}
