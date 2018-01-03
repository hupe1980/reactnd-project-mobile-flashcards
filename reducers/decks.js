import { ADD_CARD, ADD_DECK } from '../actions';

function addCard(state, action) {
  const { payload } = action;
  const { deckId, cardId } = payload;

  // Look up the correct deck, to simplify the rest of the code
  const deck = state[deckId];

  return {
    ...state,
    // Update our Deck object with a new "cards" array
    [deckId]: {
      ...deck,
      cards: [...deck.cards, cardId],
    },
  };
}

function addDeck(state, action) {
  const { payload } = action;
  const { deckId, title } = payload;

  const deck = { id: deckId, title, cards: [] };

  return {
    ...state,
    [deckId]: deck,
  };
}

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_CARD: return addCard(state, action);
    case ADD_DECK: return addDeck(state, action);
    default: return state;
  }
}
