import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FormInput, FormValidationMessage } from 'react-native-elements';
import { Field } from 'redux-form';

const propTypes = {
  name: PropTypes.string.isRequired,
};

// eslint-disable-next-line react/prop-types
function renderField({ input, meta: { touched, error }, ...inputProps }) {
  return (
    <View>
      <FormInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {touched && error && <FormValidationMessage>{error}</FormValidationMessage>}
    </View>
  );
}

function TextField({ name, ...rest }) {
  return (
    <Field
      name={name}
      component={renderField}
      {...rest}
    />
  );
}

TextField.propTypes = propTypes;

export default TextField;
