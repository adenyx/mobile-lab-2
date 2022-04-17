import React from 'react';
import { useSelector } from 'react-redux';

import ProductDetailsView from './ProductDetailsView';
import { convertCurrencies } from '../../core/utils';

const ProductDetailsContainer = props => {
  const productData = props.route.params.productData;

  const currentCurrency = useSelector(store => store.user.userCurrency);
  const currencies = useSelector(store => store.currencies.currenciesList);

  const price = convertCurrencies(
    productData.price,
    currentCurrency,
    currencies,
  );

  return (
    <ProductDetailsView
      /**
       * Options
       */
      product={productData}
      price={price}
      currentCurrency={currentCurrency}

      /**
       * Methods
       */
    />
  );
};

export default ProductDetailsContainer;
