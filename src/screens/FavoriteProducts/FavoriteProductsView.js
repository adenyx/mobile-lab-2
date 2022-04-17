import React from 'react';
import { View, FlatList } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Button, Product, Text } from '../../components';
import { screenHeight } from '../../styles';

const FavoriteProductsView = props => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text>Favorites list is empty</Text>
          </View>
        )}
        style={styles.dataContainer}
        data={props.favoriteProducts}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Product item={item} onPress={() => props.onItemPress(item)} />
        )}
      />
      {!!props.favoriteProducts.length && (
        <View style={styles.buttonBlock}>
          <Button onPress={props.clearFavorites} value="Clear list" />
        </View>
      )}
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyList: {
    height: screenHeight - 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dataContainer: {
    width: '100%',
  },
  separator: {
    height: 32,
  },

  buttonBlock: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 32,
  },
});

export default FavoriteProductsView;
