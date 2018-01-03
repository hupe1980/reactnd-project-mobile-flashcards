import { START_QUIZ, NEXT_CARD, RESTART_QUIZ } from '../actions';

const initialState = {
  cards: [],
  index: -1,
  correctCount: 0,
  showResult: false,
};

function startQuiz(state, action) {
  const { deck } = action.payload;

  return {
    ...deck,
    index: 0,
    correctCount: 0,
  };
}

function nextCard(state, action) {
  const { isLastAnswerCorrect } = action.payload;

  const { index, correctCount, cards } = state;
  const newIndex = index === cards.length - 1 ? -1 : index + 1;

  return {
    ...state,
    index: newIndex,
    correctCount: isLastAnswerCorrect ? correctCount + 1 : correctCount,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_QUIZ: return startQuiz(state, action);
    case NEXT_CARD: return nextCard(state, action);
    case RESTART_QUIZ:
      return {
        ...state,
        index: 0,
        correctCount: 0,
      };
    default: return state;
  }
}
