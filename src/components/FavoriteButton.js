import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import RNStyles from '@tapston/react-native-styles';

import { Icon } from '.';
import { colors } from '../styles';
import UserActions from '../store/reducers/user/actions';

/**
 * FavoriteButton component
 * @prop {object} product
 */
const FavoriteButton = ({ product }) => {
  const dispatch = useDispatch();

  const favoritesProducts = useSelector(store => store.user.favoritesProducts);

  const isInFavorite = favoritesProducts.find(el => el.id === product.id);

  const handleChangeFavoriteStatus = () => {
    if (!favoritesProducts.find(el => el.id === product.id)) {
      dispatch(
        UserActions.editFavoriteProducts([...favoritesProducts, product]),
      );
    } else {
      dispatch(
        UserActions.editFavoriteProducts(
          favoritesProducts.filter(el => el.id !== product.id),
        ),
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={handleChangeFavoriteStatus}
      style={styles.container}>
      <Icon
        name="star"
        color={isInFavorite ? colors.yellow : colors.grayscale[0]}
      />
    </TouchableOpacity>
  );
};

const styles = RNStyles.create({
  container: {
    marginRight: 8,
  },
});

export default FavoriteButton;
