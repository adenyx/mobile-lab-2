import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';
import productsReducer from './products';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  products: productsReducer,
});
