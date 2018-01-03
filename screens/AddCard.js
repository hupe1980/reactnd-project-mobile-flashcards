import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { v4 as uuid } from 'uuid';

import Button from '../components/Button';
import Card from '../components/Card';
import TextField from '../components/TextField';
import FormView from '../components/FormView';
import { addCard } from '../actions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        deckId: PropTypes.string,
      }),
    }),
  }).isRequired,
};

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'question',
    'answer',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit({ question, answer }) {
    const cardId = uuid();
    const { deckId } = this.props.navigation.state.params;

    this.props.dispatch(addCard({
      deckId, cardId, question, answer,
    }));
    this.props.reset();
  }

  render() {
    return (
      <FormView>
        <Card featuredTitle="Add a new card to the deck">
          <TextField name="question" placeholder="Enter question..." />
          <TextField name="answer" placeholder="Enter answer..." />
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

AddCard.navigationOptions = {
  title: 'Add Card',
};

AddCard.propTypes = propTypes;

export default reduxForm({ form: 'AddCard', validate })(AddCard);
