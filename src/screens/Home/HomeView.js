import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Text } from '../../components';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeView;
