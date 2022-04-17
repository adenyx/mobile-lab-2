import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { NavigationRow } from '../../components';

const ProfileView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <NavigationRow title="Favorites" onPress={props.navigateToFavorites} />
      </View>
      <View style={styles.row}>
        <NavigationRow title="Settings" onPress={props.navigateToSettings} />
      </View>
      <View style={styles.row}>
        <NavigationRow title="About us" onPress={props.navigateToAbout} />
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  row: {
    marginBottom: 16,
  },
});

export default ProfileView;
