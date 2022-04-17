import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text } from '.';
import { colors } from '../styles';

/**
 * Product component
 * @prop {{
 *  title: string,
 *  category: string,
 *  price: number,
 *  image: string
 * }} item - product item object
 */
const Product = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text size={16} numberOfLines={2}>
          {item.title}
        </Text>
        <Text color={colors.grayscale[6]}>{item.category}</Text>
      </View>
      <View style={styles.costContainer}>
        <Text size={16} weight="600">
          {item.price}$
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = RNStyles.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  imageContainer: {
    height: 64,
    width: 64,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grayscale[4],
  },
  image: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },

  descriptionContainer: {
    flex: 1,
    marginLeft: 8,
    overflow: 'hidden',
  },

  costContainer: {
    marginLeft: 8,
  },
});

export default Product;
