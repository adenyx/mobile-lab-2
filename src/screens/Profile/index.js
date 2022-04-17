import React, { useState, useEffect } from 'react';

import ProfileView from './ProfileView';

const ProfileContainer = props => {
  const navigateToAbout = () => props.navigation.navigate('AboutUs');
  return (
    <ProfileView
      /**
       * Options
       */

      /**
       * Methods
       */
      navigateToAbout={navigateToAbout}
    />
  );
};

export default ProfileContainer;
