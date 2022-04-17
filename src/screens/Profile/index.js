import React from 'react';

import ProfileView from './ProfileView';

const ProfileContainer = props => {
  const navigateToFavorites = () =>
    props.navigation.navigate('FavoriteProducts');
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
      navigateToFavorites={navigateToFavorites}
      navigateToSettings={navigateToSettings}
      navigateToAbout={navigateToAbout}
    />
  );
};

export default ProfileContainer;
