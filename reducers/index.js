import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import decks from './decks';
import cards from './cards';
import quiz from './quiz';

export const getDeckById = (state, id) => {
  const deck = state.decks[id];

  return {
    ...deck,
    cardCount: deck.cards.length,
  };
};

export const getDecks = state => Object.keys(state.decks).map(id => getDeckById(state, id));

export const getCardById = (state, id) => state.cards[id];

export const getQuizWithCurrentCard = (state) => {
  // eslint-disable-next-line no-shadow
  const { index, cards, correctCount } = state.quiz;
  const card = index !== -1 ? getCardById(state, cards[index]) : null;

  return {
    current: index === -1 ? null : index + 1,
    cardCount: cards.length,
    showResult: index === -1,
    currentCard: card,
    correctCount,
  };
};

export default combineReducers({
  form,
  decks,
  cards,
  quiz,
});
