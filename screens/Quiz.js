import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import Button from '../components/Button';
import { getQuizWithCurrentCard } from '../reducers';
import { nextCard, restartQuiz } from '../actions';
import { createPlatformStyle } from '../utils/helpers';
import { success, danger, light } from '../utils/colors';
import * as customPropTypes from '../utils/customPropTypes';

const propTypes = {
  nextCard: PropTypes.func.isRequired,
  correctCount: PropTypes.number.isRequired,
  cardCount: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
  current: PropTypes.number,
  currentCard: customPropTypes.card,
};

const defaultProps = {
  current: null,
  currentCard: null,
};

const styles = createPlatformStyle({
  btnContainer: {
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  toggleText: {
    color: danger,
    fontWeight: 'bold',
  },
});

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(isLastAnswerCorrect) {
    this.setState({ showAnswer: false });
    this.props.nextCard({ isLastAnswerCorrect });
  }

  renderResult() {
    const { correctCount, cardCount, restartQuiz } = this.props;

    return (
      <View style={{ flex: 1, margin: 0, justifyContent: 'space-between' }}>
        <View style={styles.contentContainer}>
          <Text h4>{`${correctCount} / ${cardCount} correct answers!`}</Text>
          <Divider />
        </View>
        <View style={styles.btnContainer}>
          <Button
            raised
            title="Restart Quiz"
            onPress={() => restartQuiz()}
          />
        </View>
      </View>
    );
  }

  render() {
    const { showAnswer } = this.state;
    const {
      current, cardCount, currentCard, showResult,
    } = this.props;

    if (showResult) return this.renderResult();

    return (
      <View style={{ flex: 1, margin: 0, justifyContent: 'space-between' }}>
        <View style={styles.contentContainer}>
          <Text style={{ color: light }}>{`${current} / ${cardCount}`}</Text>
          <Text h4>
            {showAnswer ? currentCard.answer : currentCard.question}
          </Text>
          <Button
            transparent
            textStyle={styles.toggleText}
            title={showAnswer ? 'Question' : 'Answer'}
            onPress={() => this.setState(prevState => ({ showAnswer: !prevState.showAnswer }))}
          />
          <Divider />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Correct"
            backgroundColor={success}
            onPress={() => this.handleAnswer(true)}
          />
          <Button
            title="Incorrect"
            backgroundColor={danger}
            onPress={() => this.handleAnswer(false)}
          />
        </View>
      </View>
    );
  }
}

Quiz.navigationOptions = {
  title: 'Quiz',
};

Quiz.propTypes = propTypes;
Quiz.defaultProps = defaultProps;

function mapStatToProps(state) {
  return {
    ...getQuizWithCurrentCard(state),
  };
}

export default connect(mapStatToProps, { nextCard, restartQuiz })(Quiz);
