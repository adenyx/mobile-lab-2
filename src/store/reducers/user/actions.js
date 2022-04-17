/**
 * @prettier
 */

import {
  clearFavoriteProducts,
  editFavoriteProducts,
  editUserCurrency,
} from './user';

/**
 * Redux actions for user.
 */
class UserActions {
  static editUserCurrency(currency) {
    return async dispatch => {
      dispatch(editUserCurrency(currency));
    };
  }
  static editFavoriteProducts(products) {
    return async dispatch => {
      dispatch(editFavoriteProducts(products));
    };
  }
  static clearFavoriteProducts() {
    return async dispatch => {
      dispatch(clearFavoriteProducts());
    };
  }
}

export default UserActions;
