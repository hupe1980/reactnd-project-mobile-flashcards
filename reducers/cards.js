import { ADD_CARD } from '../actions';

function addCard(state, action) {
  const { payload } = action;
  const {
    cardId, deckId, question, answer,
  } = payload;

  const card = {
    id: cardId, question, answer, deckId,
  };

  return {
    ...state,
    [cardId]: card,
  };
}

export default function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD: return addCard(state, action);
    default: return state;
  }
}
