import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Icon, Text } from '../components';
import { colors } from '../styles';

/**
 * TabBar component
 * @prop {object} props - navigation props
 */
const TabBar = props => {
  const navigateToScreen = screenName => {
    props.navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {props.state.routes.map((el, index) => {
        const isFocused = props.state.index === index;
        return (
          <TouchableOpacity
            key={el.name}
            disabled={isFocused}
            onPress={() => navigateToScreen(el.name)}
            style={styles.iconBlock}>
            <Icon
              name={el.name}
              width={28}
              height={28}
              color={isFocused ? colors.blue : colors.grayscale[6]}
            />
            <Text color={isFocused ? colors.blue : colors.grayscale[6]}>
              {el.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: colors.grayscale[2],
  },
  iconBlock: {
    alignItems: 'center',
  },
});

export default TabBar;
