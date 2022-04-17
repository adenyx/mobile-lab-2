import React from 'react';
import { View, FlatList } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Product } from '../../components';

const CategoriesView = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.dataContainer}
        data={props.products}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Product item={item} onPress={() => props.onItemPress(item)} />
        )}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dataContainer: {
    width: '100%',
  },
  separator: {
    height: 32,
  },
});

export default CategoriesView;
