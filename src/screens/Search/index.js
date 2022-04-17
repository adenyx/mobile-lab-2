import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchView from './SearchView';
import { getAllCategoriesFromProducts } from '../../core/utils';

const SearchContainer = props => {
  const products = useSelector(store => store.products.productsList);

  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState(
    getAllCategoriesFromProducts(products),
  );

  const onChangeSearchValue = value => {
    setSearchValue(value);
  };

  const onCategoryPress = category => {
    const categorizedProducts = products.filter(el => el.category === category);
    props.navigation.navigate('Categories', { products: categorizedProducts });
  };

  return (
    <SearchView
      /**
       * Options
       */
      searchValue={searchValue}
      categories={categories}
      /**
       * Methods
       */
      setSearchValue={setSearchValue}
      onChangeSearchValue={onChangeSearchValue}
      onCategoryPress={onCategoryPress}
    />
  );
};

export default SearchContainer;
