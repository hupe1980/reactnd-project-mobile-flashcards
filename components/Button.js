import React from 'react';
import PropTypes from 'prop-types';
import { Button as RNEButton } from 'react-native-elements';

import { primary } from '../utils/colors';

const propTypes = {
  backgroundColor: PropTypes.string,
  containerViewStyle: RNEButton.propTypes.containerViewStyle,
};

const defaultProps = {
  backgroundColor: primary,
  containerViewStyle: {},
};

function Button({ backgroundColor, containerViewStyle, ...rest }) {
  return (
    <RNEButton
      backgroundColor={backgroundColor}
      containerViewStyle={[{ marginTop: 10 }, containerViewStyle]}
      {...rest}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
