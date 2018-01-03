import { createAction } from 'redux-actions';

import * as types from './types';

export const addCard = createAction(types.ADD_CARD);

export const addDeck = createAction(types.ADD_DECK);

export const startQuiz = createAction(types.START_QUIZ);

export const nextCard = createAction(types.NEXT_CARD);

export const restartQuiz = createAction(types.RESTART_QUIZ);
