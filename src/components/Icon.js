import React from 'react';

import RNStyles from '@tapston/react-native-styles';

import Home from '../assets/svg/home.svg';
import Search from '../assets/svg/search.svg';
import Profile from '../assets/svg/profile.svg';

/**
 * @component Icon
 * @example
 * <Icon
 *  name="wallet"
 *  width={16}
 *  height={16}
 *  color="#3C8A43"
 * />
 */
const Icon = ({
  width = '24',
  height = '24',
  name = '',
  color = '#000000',
}) => {
  const iconWidth = RNStyles.h(width);
  const iconHeight = RNStyles.h(height);

  switch (name.toLowerCase()) {
    case 'home':
      return <Home width={iconWidth} height={iconHeight} color={color} />;
    case 'search':
      return <Search width={iconWidth} height={iconHeight} color={color} />;
    case 'profile':
      return <Profile width={iconWidth} height={iconHeight} color={color} />;

    default:
      return <Profile width={iconWidth} height={iconHeight} color={color} />;
  }
};

export default Icon;