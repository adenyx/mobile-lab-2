/**
 * @prettier
 */

import { editUserCurrency } from './user';

/**
 * Redux actions for user.
 */
class UserActions {
  static editUserCurrency(currency) {
    return async dispatch => {
      dispatch(editUserCurrency(currency));
    };
  }
}

export default UserActions;
