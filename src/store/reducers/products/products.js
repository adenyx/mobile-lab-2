/**
 * @prettier
 */

const initialState = {
  loading: false,
  productsList: [],
  categories: [],
  categorizedProducts: [],
};

const WRITE_PRODUCTS_REQUEST = 'WRITE_PRODUCTS_REQUEST';
const WRITE_PRODUCTS_SUCCESS = 'WRITE_PRODUCTS_SUCCESS';
const WRITE_PRODUCTS_FAILURE = 'WRITE_PRODUCTS_FAILURE';

const WRITE_CATEGORIES_REQUEST = 'WRITE_CATEGORIES_REQUEST';
const WRITE_CATEGORIES_SUCCESS = 'WRITE_CATEGORIES_SUCCESS';
const WRITE_CATEGORIES_FAILURE = 'WRITE_CATEGORIES_FAILURE';
const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';

const WRITE_PRODUCTS_IN_CATEGORY_REQUEST = 'WRITE_PRODUCTS_IN_CATEGORY_REQUEST';
const WRITE_PRODUCTS_IN_CATEGORY_SUCCESS = 'WRITE_PRODUCTS_IN_CATEGORY_SUCCESS';
const WRITE_PRODUCTS_IN_CATEGORY_FAILURE = 'WRITE_PRODUCTS_IN_CATEGORY_FAILURE';
const CLEAR_PRODUCTS_IN_CATEGORY = 'CLEAR_PRODUCTS_IN_CATEGORY';

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
    case WRITE_CATEGORIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case WRITE_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    }
    case WRITE_CATEGORIES_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case WRITE_PRODUCTS_IN_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case WRITE_PRODUCTS_IN_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        categorizedProducts: action.payload,
      };
    }
    case WRITE_PRODUCTS_IN_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case CLEAR_CATEGORIES: {
      return {
        ...state,
        categories: [],
      };
    }
    case CLEAR_PRODUCTS_IN_CATEGORY: {
      return {
        ...state,
        categorizedProducts: [],
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

export const writeCategoriesRequest = () => ({
  type: WRITE_CATEGORIES_REQUEST,
});

export const writeCategoriesSuccess = payload => ({
  type: WRITE_CATEGORIES_SUCCESS,
  payload,
});

export const writeCategoriesFailure = () => ({
  type: WRITE_CATEGORIES_FAILURE,
});

export const clearAllCategories = () => ({
  type: CLEAR_CATEGORIES,
});

export const writeProductsInCategoryRequest = () => ({
  type: WRITE_PRODUCTS_IN_CATEGORY_REQUEST,
});

export const writeProductsInCategorySuccess = payload => ({
  type: WRITE_PRODUCTS_IN_CATEGORY_SUCCESS,
  payload,
});

export const writeProductsInCategoryFailure = () => ({
  type: WRITE_PRODUCTS_IN_CATEGORY_FAILURE,
});

export const clearProductsInCategory = () => ({
  type: CLEAR_PRODUCTS_IN_CATEGORY,
});

export default reducer;
