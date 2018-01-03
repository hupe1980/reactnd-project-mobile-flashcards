import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';
import { Constants } from 'expo';

const propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

function StatusBar({ backgroundColor, ...props }) {
  return (
    <ReactNative.View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <ReactNative.StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </ReactNative.View>
  );
}

StatusBar.propTypes = propTypes;

export default StatusBar;
