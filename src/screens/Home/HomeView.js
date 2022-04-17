import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Product } from '../../components';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={() => {
          if (props.isLoading) {
            return (
              <View style={styles.loadingContainer}>
                <ActivityIndicator />
              </View>
            );
          }
          return <View />;
        }}
        style={styles.dataContainer}
        data={props.products}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Product item={item} />}
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

export default HomeView;
