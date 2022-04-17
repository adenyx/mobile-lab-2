import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesView from './CategoriesView';
import ProductsActions from '../../store/reducers/products/actions';

const CategoriesContainer = props => {
  const category = props.route.params.category;

  const dispatch = useDispatch();

  const products = useSelector(store => store.products.categorizedProducts);
  const isLoading = useSelector(store => store.products.loading);

  const onItemPress = item => {
    props.navigation.navigate('ProductDetails', {
      productData: item,
    });
  };

  useEffect(() => {
    dispatch(ProductsActions.getProductsInCategory(category));

    return () => {
      dispatch(ProductsActions.clearProductsInCategory());
    };
  }, [dispatch, category]);

  return (
    <CategoriesView
      /**
       * Options
       */
      isLoading={isLoading}
      category={category}
      products={products}
      /**
       * Methods
       */
      onItemPress={onItemPress}
    />
  );
};

export default CategoriesContainer;
