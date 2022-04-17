/**
 * @prettier
 */

import { Alert } from 'react-native';

import { APIProductsService } from '../../../core';
import {
  writeProductsFailure,
  writeProductsRequest,
  writeProductsSuccess,
} from './products';

/**
 * Redux actions for products.
 */
class ProductsActions {
  static getAllProducts() {
    return async dispatch => {
      dispatch(writeProductsRequest());
      try {
        const response = await APIProductsService.getAllProducts();
        dispatch(writeProductsSuccess(response));
      } catch (error) {
        dispatch(writeProductsFailure());
        Alert.alert('Request error', 'Something went wrong');
      }
    };
  }
}

export default ProductsActions;
