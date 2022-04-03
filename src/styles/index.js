import { Dimensions } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const { height, width } = Dimensions.get('window');
export const screenHeight = height;
export const screenWidth = width;

export const colors = {
  main: '#be003c',
  backgroundColor: 'rgb(254, 249, 232)',
  white: '#FFFFFF',
  black: '#000000',

  error: {
    default: '#C03A39',
    dark: '#81202F',
    darkmode: '#E13F43',
  },
  success: {
    default: '#7DA939',
    dark: '#658E2D',
    darkmode: '#B9DC67',
  },
};

export const hitSlop = {
  top: RNStyles.h(16),
  right: RNStyles.w(16),
  bottom: RNStyles.h(16),
  left: RNStyles.w(16),
};
