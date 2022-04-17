import { api, log } from '.';

export default class APICurrenciesService {
  static async getCurrencies() {
    try {
      const response = await api.get(
        'https://www.nbrb.by/api/exrates/rates?periodicity=0',
      );
      const data = await response.json();
      log('info', '[CURRENCY] Get currencies: ', data);
      return data;
    } catch (err) {
      const error = await err.response.json();
      log('error', '[CURRENCY] Get currencies error: ', error);
      throw error;
    }
  }
}
