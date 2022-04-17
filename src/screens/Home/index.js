import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import HomeView from './HomeView';
import ProductsActions from '../../store/reducers/products/actions';

const HomeContainer = props => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products.productsList);
  const isLoading = useSelector(store => store.products.loading);

  const onItemPress = item => {
    props.navigation.navigate('ProductDetails', {
      productData: item,
    });
  };

  useEffect(() => {
    dispatch(ProductsActions.getAllProducts());
  }, []);

  return (
    <HomeView
      /**
       * Options
       */
      products={products}
      isLoading={isLoading}
      /**
       * Methods
       */
      onItemPress={onItemPress}
    />
  );
};

export default HomeContainer;
