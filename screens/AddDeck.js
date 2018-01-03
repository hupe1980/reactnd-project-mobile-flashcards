import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { v4 as uuid } from 'uuid';

import Button from '../components/Button';
import Card from '../components/Card';
import FormView from '../components/FormView';
import TextField from '../components/TextField';
import { addDeck } from '../actions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'title',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

class AddDeck extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit({ title }) {
    const deckId = uuid();
    this.props.dispatch(addDeck({ deckId, title }));
    this.props.reset();
    this.toDeckDetail(deckId, title);
  }

  toDeckDetail(deckId, title) {
    this.props.navigation.navigate('DeckDetail', { deckId, title });
  }

  render() {
    return (
      <FormView>
        <Card featuredTitle="What is the title of your new deck?">
          <TextField name="title" placeholder="Enter title..." />
          <Button
            raised
            onPress={this.props.handleSubmit(this.submit)}
            title="Submit"
          />
        </Card >
      </FormView>
    );
  }
}

AddDeck.propTypes = propTypes;

export default reduxForm({ form: 'AddDeck', validate })(AddDeck);
