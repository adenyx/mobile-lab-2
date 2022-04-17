import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchView from './SearchView';
import { getAllCategoriesFromProducts } from '../../core/utils';
import ProductsActions from '../../store/reducers/products/actions';

const SearchContainer = props => {
  const dispatch = useDispatch();

  const products = useSelector(store => store.products.productsList);
  const isLoading = useSelector(store => store.products.loading);
  const categoriesList = useSelector(store => store.products.categories);

  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState(categoriesList);
  const [isFocused, setFocused] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const onChangeSearchValue = value => {
    setSearchValue(value);
    setProductsList(products.filter(el => el.title.includes(value)));
  };

  const onCategoryPress = category =>
    props.navigation.navigate('Categories', { category: category });

  useEffect(() => {
    dispatch(ProductsActions.getAllCategories());

    return () => {
      dispatch(ProductsActions.clearAllCategories());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !categoriesList.length) {
      setCategories(getAllCategoriesFromProducts(products));
    }
  }, [isLoading, categoriesList, products]);

  return (
    <SearchView
      /**
       * Options
       */
      isFocused={isFocused}
      searchValue={searchValue}
      categories={categories}
      isLoading={isLoading}
      products={productsList}
      /**
       * Methods
       */
      setSearchValue={setSearchValue}
      setFocused={setFocused}
      onChangeSearchValue={onChangeSearchValue}
      onCategoryPress={onCategoryPress}
    />
  );
};

export default SearchContainer;
