import React from 'react';

import ProfileView from './ProfileView';

const ProfileContainer = props => {
  const navigateToSettings = () => props.navigation.navigate('Settings');
  const navigateToAbout = () => props.navigation.navigate('AboutUs');
  return (
    <ProfileView
      /**
       * Options
       */

      /**
       * Methods
       */
      navigateToSettings={navigateToSettings}
      navigateToAbout={navigateToAbout}
    />
  );
};

export default ProfileContainer;
