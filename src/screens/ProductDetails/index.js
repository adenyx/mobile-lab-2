import React from 'react';
import { useSelector } from 'react-redux';

import ProductDetailsView from './ProductDetailsView';
import { convertCurrencies } from '../../core/utils';
import { FavoriteButton } from '../../components';

const ProductDetailsContainer = props => {
  const productData = props.route.params.productData;

  const currentCurrency = useSelector(store => store.user.userCurrency);
  const currencies = useSelector(store => store.currencies.currenciesList);

  const price = convertCurrencies(
    productData.price,
    currentCurrency,
    currencies,
  );

  props.navigation.setOptions({
    headerRight: () => <FavoriteButton product={productData} />,
  });

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
