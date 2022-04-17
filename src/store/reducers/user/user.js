/**
 * @prettier
 */

const initialState = {
  userCurrency: 'usd',
};

const EDIT_USER_CURRENCY = 'EDIT_USER_CURRENCY';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_CURRENCY: {
      return {
        ...state,
        userCurrency: action.payload,
      };
    }
    default:
      return state;
  }
};

export const editUserCurrency = payload => ({
  type: EDIT_USER_CURRENCY,
  payload,
});

export default reducer;
