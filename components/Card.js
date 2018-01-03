import React from 'react';
import PropTypes from 'prop-types';
import { Card as RNECard } from 'react-native-elements';

import { createPlatformStyle } from '../utils/helpers';
import { white } from '../utils/colors';

const cardBoxImage = require('../assets/cardbox.jpg');

const propTypes = {
  children: PropTypes.node.isRequired,
  featuredTitleStyle: RNECard.propTypes.featuredTitleStyle,
  image: RNECard.propTypes.image,
  imageProps: RNECard.propTypes.imageProps,
};

const defaultProps = {
  featuredTitleStyle: {},
  image: cardBoxImage,
  imageProps: { resizeMode: 'cover' },
};

const styles = createPlatformStyle({
  titleText: {
    color: white,
    textAlign: 'center',
  },
});

function Card({
  children, featuredTitleStyle, image, imageProps, ...rest
}) {
  return (
    <RNECard
      containerStyle={{ flex: 1, margin: 0, justifyContent: 'center' }}
      featuredTitleStyle={[styles.titleText, featuredTitleStyle]}
      image={image}
      imageProps={imageProps}
      {...rest}
    >
      {children}
    </RNECard>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
