import React from 'react';

import ProductDetailsView from './ProductDetailsView';

const ProductDetailsContainer = props => {
  const productData = props.route.params.productData;
  return (
    <ProductDetailsView
      /**
       * Options
       */
      product={productData}

      /**
       * Methods
       */
    />
  );
};

export default ProductDetailsContainer;
