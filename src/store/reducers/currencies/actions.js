/**
 * @prettier
 */

import { log } from '../../../core';

import APICurrenciesService from '../../../core/currencies';

import { writeCurrencies } from './currencies';

/**
 * Redux actions for currencies.
 */
class CurrenciesActions {
  static getCurrencies() {
    return async dispatch => {
      try {
        const response = await APICurrenciesService.getCurrencies();
        dispatch(writeCurrencies(response));
      } catch (error) {
        log('error', 'Dispatch currencies error: ', error);
      }
    };
  }
}

export default CurrenciesActions;
