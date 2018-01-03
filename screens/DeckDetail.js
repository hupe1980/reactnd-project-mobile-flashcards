import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Text } from 'react-native-elements';

import Button from '../components/Button';
import Card from '../components/Card';
import { getDeckById } from '../reducers';
import { startQuiz } from '../actions';
import {
  createPlatformStyle,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';
import { primary } from '../utils/colors';
import * as customPropTypes from '../utils/customPropTypes';

const propTypes = {
  deck: customPropTypes.deck.isRequired,
  startQuiz: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const styles = createPlatformStyle({
  addCardText: {
    color: primary,
  },
  descrText: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  btnAddCard: {
    borderColor: primary,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 10,
  },
});

class DeckDetail extends Component {
  constructor(props) {
    super(props);

    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }

  handleStartQuiz() {
    const { deck, startQuiz, navigation } = this.props;
    startQuiz({ deck });
    clearLocalNotification().then(setLocalNotification);
    navigation.navigate('Quiz');
  }

  render() {
    const { deck, navigation } = this.props;
    const { id, title, cardCount } = deck;

    return (
      <Card featuredTitle={title} featuredSubtitle={`${cardCount} cards`}>
        <Text style={styles.descrText}>Choose one of the options below:</Text>
        <Divider />
        <Button
          outline
          textStyle={styles.addCardText}
          buttonStyle={styles.btnAddCard}
          title="Add Card"
          onPress={() => navigation.navigate('AddCard', { deckId: id })}
        />
        <Button
          raised
          disabled={cardCount === 0}
          title="Start Quiz"
          onPress={() => this.handleStartQuiz()}
        />
      </Card>
    );
  }
}

DeckDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

DeckDetail.propTypes = propTypes;

function mapStatToProps(state, ownProps) {
  const { deckId } = ownProps.navigation.state.params;

  return {
    deck: getDeckById(state, deckId),
  };
}

export default connect(mapStatToProps, { startQuiz })(DeckDetail);
