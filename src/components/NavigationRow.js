import React from 'react';
import { TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text, Icon } from '.';
import { colors } from '../styles';

/**
 * NavigationRow component
 * @prop {string} title - row title text
 * @prop {function} onPress - row title text
 */
const NavigationRow = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text size={18}>{title}</Text>
      <Icon
        name="arrow-right"
        width={20}
        height={20}
        color={colors.grayscale[4]}
      />
    </TouchableOpacity>
  );
};

const styles = RNStyles.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grayscale[4],
  },
});

export default NavigationRow;
