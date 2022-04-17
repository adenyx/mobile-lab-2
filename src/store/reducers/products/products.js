/**
 * @prettier
 */

const initialState = {
  loading: false,
  productsList: [],
};

const WRITE_PRODUCTS_REQUEST = 'WRITE_PRODUCTS_REQUEST';
const WRITE_PRODUCTS_SUCCESS = 'WRITE_PRODUCTS_SUCCESS';
const WRITE_PRODUCTS_FAILURE = 'WRITE_PRODUCTS_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case WRITE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productsList: action.payload,
      };
    }
    case WRITE_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export const writeProductsRequest = () => ({
  type: WRITE_PRODUCTS_REQUEST,
});

export const writeProductsSuccess = payload => ({
  type: WRITE_PRODUCTS_SUCCESS,
  payload,
});

export const writeProductsFailure = () => ({
  type: WRITE_PRODUCTS_FAILURE,
});

export default reducer;
