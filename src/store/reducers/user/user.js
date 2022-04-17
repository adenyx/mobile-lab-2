/**
 * @prettier
 */

const initialState = {
  userCurrency: 'usd',
  favoritesProducts: [],
};

const EDIT_USER_CURRENCY = 'EDIT_USER_CURRENCY';
const EDIT_FAVORITE_PRODUCTS = 'EDIT_FAVORITE_PRODUCTS';
const CLEAR_FAVORITE_PRODUCTS = 'CLEAR_FAVORITE_PRODUCTS';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_CURRENCY: {
      return {
        ...state,
        userCurrency: action.payload,
      };
    }
    case EDIT_FAVORITE_PRODUCTS: {
      return {
        ...state,
        favoritesProducts: action.payload,
      };
    }
    case CLEAR_FAVORITE_PRODUCTS: {
      return {
        ...state,
        favoritesProducts: [],
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

export const editFavoriteProducts = payload => ({
  type: EDIT_FAVORITE_PRODUCTS,
  payload,
});

export const clearFavoriteProducts = () => ({
  type: CLEAR_FAVORITE_PRODUCTS,
});

export default reducer;
