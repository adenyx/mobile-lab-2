import React from 'react';

import { Text } from '.';
import { colors } from '../styles';

/**
 * DescriptionRow component
 * @prop {string} title - title row
 * @prop {string} subtitle - subtitle row
 */
const DescriptionRow = ({ title, subtitle }) => {
  return (
    <Text size={16} color={colors.grayscale[6]}>
      <Text size={16} weight="600">
        {title}:{' '}
      </Text>
      {subtitle}
    </Text>
  );
};

export default DescriptionRow;
