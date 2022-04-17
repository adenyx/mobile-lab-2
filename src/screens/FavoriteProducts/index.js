import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteProductsView from './FavoriteProductsView';
import UserActions from '../../store/reducers/user/actions';

const FavoriteProductsContainer = props => {
  const dispatch = useDispatch();

  const favoriteProducts = useSelector(store => store.user.favoritesProducts);

  const clearFavorites = () => {
    dispatch(UserActions.clearFavoriteProducts());
    props.navigation.goBack();
  };

  return (
    <FavoriteProductsView
      /**
       * Options
       */
      favoriteProducts={favoriteProducts}
      /**
       * Methods
       */
      clearFavorites={clearFavorites}
    />
  );
};

export default FavoriteProductsContainer;
