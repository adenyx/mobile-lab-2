import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text, DescriptionRow } from '../../components';
import { colors } from '../../styles';

const ProductDetailsView = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text size={18} weight="bold">
          {props.product.title}
        </Text>
        <View style={styles.border} />
        <Text size={16} color={colors.blue}>
          Price: {props.price} {props.currentCurrency.toUpperCase()}
        </Text>
        <View style={styles.border} />
        <DescriptionRow title="Category" subtitle={props.product.category} />
        <View style={styles.border} />
        <DescriptionRow
          title="Description"
          subtitle={props.product.description}
        />
        <DescriptionRow title="Item number" subtitle={props.product.id} />
        <View style={styles.border} />
        <DescriptionRow title="Rating" subtitle={props.product.rating.rate} />
      </View>
    </ScrollView>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
  },

  border: {
    height: 4,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.grayscale[2],
  },

  imageContainer: {
    width: '100%',
    height: '40%',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.grayscale[2],
    backgroundColor: colors.grayscale[0],
  },
  image: {
    width: '100%',
    height: '100%',
  },

  descriptionContainer: {
    width: '100%',
    padding: 16,
  },
});

export default ProductDetailsView;
