import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Icon } from '.';
import { colors } from '../styles';

/**
 * SearchInput component
 * @prop {string} searchValue
 * @prop {function} onChangeSearchText
 * @prop {function} setFocus
 */
const SearchInput = ({
  searchValue = '',
  onChangeSearchText = () => {},
  setFocus = () => {},
}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" width={24} height={24} color={colors.grayscale[10]} />
      <TextInput
        placeholderTextColor={`${colors.grayscale[4]}`}
        style={styles.searchTextInput}
        value={searchValue}
        autoFocus={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeSearchText}
        placeholder="Search"
        selectionColor={colors.grayscale[10]}
      />
      {searchValue.length ? (
        <TouchableOpacity onPress={() => onChangeSearchText('')}>
          <Icon name="clear" color={colors.grayscale[0]} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = RNStyles.create({
  searchContainer: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.grayscale[4],
  },
  searchTextInput: {
    flex: 1,
    height: '100%',
    marginLeft: 16,
    color: colors.grayscale[10],
    fontSize: 16,
  },
});

export default SearchInput;
