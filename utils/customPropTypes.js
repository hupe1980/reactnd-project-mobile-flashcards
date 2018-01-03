import PropTypes from 'prop-types';

export const deck = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  cardCount: PropTypes.number,
});

export const decks = PropTypes.arrayOf(deck);

export const card = PropTypes.shape({
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  deckId: PropTypes.string,
});
