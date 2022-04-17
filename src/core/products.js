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
  static async getAllCategories() {
    try {
      const response = await api.get(
        `${BASE_URL}${ENDPOINTS.products}/categories`,
      );
      const data = await response.json();
      log('info', '[PRODUCTS] Get all categories response: ', data);
      return data;
    } catch (err) {
      const error = await err.response.json();
      log('error', '[PRODUCTS] Get all categories error: ', error);
      throw error;
    }
  }
  static async getProductsInCategory(category) {
    try {
      const response = await api.get(
        `${BASE_URL}${ENDPOINTS.products}/category/${category}`,
      );
      const data = await response.json();
      log('info', '[PRODUCTS] Get products in category response: ', data);
      return data;
    } catch (err) {
      const error = await err.response.json();
      log('error', '[PRODUCTS] Get products in category error: ', error);
      throw error;
    }
  }
}
