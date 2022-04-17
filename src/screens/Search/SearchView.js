import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Icon, SearchInput, Text } from '../../components';
import { colors } from '../../styles';

const SearchView = props => {
  return (
    <View style={styles.container}>
      <SearchInput
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
        onChangeSearchText={props.onChangeSearchValue}
      />
      <FlatList
        style={styles.listContainer}
        data={props.categories}
        ItemSeparatorComponent={() => <View style={styles.border} />}
        renderItem={({ item }) => (
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
        )}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
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
});

export default SearchView;
