/**
 * @prettier
 */

import { Alert } from 'react-native';

import { APIProductsService } from '../../../core';
import {
  writeProductsRequest,
  writeProductsSuccess,
  writeProductsFailure,
  writeCategoriesRequest,
  writeCategoriesSuccess,
  writeCategoriesFailure,
  clearAllCategories,
  writeProductsInCategoryRequest,
  writeProductsInCategorySuccess,
  writeProductsInCategoryFailure,
  clearProductsInCategory,
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
  static getAllCategories() {
    return async dispatch => {
      dispatch(writeCategoriesRequest());
      try {
        const response = await APIProductsService.getAllCategories();
        dispatch(writeCategoriesSuccess(response));
      } catch (error) {
        dispatch(writeCategoriesFailure());
        Alert.alert('Request error', 'Something went wrong');
      }
    };
  }
  static getProductsInCategory(category) {
    return async dispatch => {
      dispatch(writeProductsInCategoryRequest());
      try {
        const response = await APIProductsService.getProductsInCategory(
          category,
        );
        dispatch(writeProductsInCategorySuccess(response));
      } catch (error) {
        dispatch(writeProductsInCategoryFailure());
        Alert.alert('Request error', 'Something went wrong');
      }
    };
  }
  static clearAllCategories() {
    return async dispatch => {
      dispatch(clearCategories());
    };
  }
  static clearProductsInCategory() {
    return async dispatch => {
      dispatch(clearProductsInCategory());
    };
  }
}

export default ProductsActions;
