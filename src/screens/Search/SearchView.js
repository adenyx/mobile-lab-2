import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Icon, Product, SearchInput, Text } from '../../components';
import { colors } from '../../styles';

const SearchView = props => {
  return (
    <View
      style={[
        styles.container,
        (props.isFocused || props.searchValue.length) &&
          styles.additionContainerStyle,
      ]}>
      <SearchInput
        setFocus={props.setFocused}
        searchValue={props.searchValue}
        onChangeSearchText={props.onChangeSearchValue}
      />
      <FlatList
        style={
          props.isFocused || props.searchValue.length
            ? styles.productsListContainer
            : styles.listContainer
        }
        data={
          props.isFocused || props.searchValue.length
            ? props.products
            : props.categories
        }
        ListEmptyComponent={() => {
          if (props.isLoading) {
            return (
              <View style={styles.loaderBlock}>
                <ActivityIndicator />
              </View>
            );
          }
          return <View />;
        }}
        ItemSeparatorComponent={() => {
          if (props.isFocused || props.searchValue.length) {
            return <View />;
          }
          return <View style={styles.border} />;
        }}
        renderItem={({ item }) => {
          if (props.isFocused || props.searchValue.length) {
            return (
              <Product item={item} onPress={() => props.onItemPress(item)} />
            );
          }
          return (
            <TouchableOpacity
              onPress={() => props.onCategoryPress(item)}
              style={styles.rowContainer}>
              <Text size={14}>{item}</Text>
              <Icon
                name="arrow-right"
                width={16}
                height={16}
                color={colors.grayscale[4]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  additionContainerStyle: {
    flex: 1,
  },

  productsListContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContainer: {
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: colors.grayscale[0],
  },
  rowContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  border: {
    height: 2,
    borderTopWidth: 0.5,
    borderColor: colors.grayscale[4],
  },
  loaderBlock: {
    padding: 8,
  },
});

export default SearchView;
