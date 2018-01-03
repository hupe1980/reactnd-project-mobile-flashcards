import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function FormView({ children }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

FormView.propTypes = propTypes;

export default FormView;
