import React from 'react';

import RNStyles from '@tapston/react-native-styles';

import Home from '../assets/svg/home.svg';
import Search from '../assets/svg/search.svg';
import Profile from '../assets/svg/profile.svg';
import ArrowRight from '../assets/svg/arrow-right.svg';
import Clear from '../assets/svg/clear.svg';
import Star from '../assets/svg/star.svg';

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
    case 'arrow-right':
      return <ArrowRight width={iconWidth} height={iconHeight} color={color} />;
    case 'clear':
      return <Clear width={iconWidth} height={iconHeight} color={color} />;
    case 'star':
      return <Star width={iconWidth} height={iconHeight} color={color} />;

    default:
      return <Profile width={iconWidth} height={iconHeight} color={color} />;
  }
};

export default Icon;
