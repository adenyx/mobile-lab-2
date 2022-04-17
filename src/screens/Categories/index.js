import React from 'react';

import CategoriesView from './CategoriesView';

const CategoriesContainer = props => {
  const products = props.route.params.products;
  const onItemPress = item => {
    props.navigation.navigate('ProductDetails', {
      productData: item,
    });
  };
  return (
    <CategoriesView
      /**
       * Options
       */
      products={products}
      /**
       * Methods
       */
      onItemPress={onItemPress}
    />
  );
};

export default CategoriesContainer;
