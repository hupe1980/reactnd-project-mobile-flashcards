import { createAction } from 'redux-actions';

export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';
export const START_QUIZ = 'START_QUIZ';
export const NEXT_CARD = 'NEXT_CARD';
export const RESTART_QUIZ = 'RESTART_QUIZ';

export const addCard = createAction(ADD_CARD);

export const addDeck = createAction(ADD_DECK);

export const startQuiz = createAction(START_QUIZ);

export const nextCard = createAction(NEXT_CARD);

export const restartQuiz = createAction(RESTART_QUIZ);
