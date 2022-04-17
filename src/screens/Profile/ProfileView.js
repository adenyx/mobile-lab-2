import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { NavigationRow } from '../../components';

const ProfileView = props => {
  return (
    <View style={styles.container}>
      <NavigationRow title="About us" onPress={props.navigateToAbout} />
    </View>
  );
};

const styles = RNStyles.create({
  container: {},
});

export default ProfileView;
