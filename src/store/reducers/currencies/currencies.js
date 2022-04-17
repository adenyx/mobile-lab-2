/**
 * @prettier
 */

const initialState = {
  currenciesList: [],
};

const WRITE_CURRENCIES = 'WRITE_CURRENCIES';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_CURRENCIES: {
      return {
        ...state,
        currenciesList: action.payload,
      };
    }
    default:
      return state;
  }
};

export const writeCurrencies = payload => ({
  type: WRITE_CURRENCIES,
  payload,
});

export default reducer;
