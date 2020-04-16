import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { cardRequest, cardSuccess, cardFailure } from './actions';

const cardData = handleActions(
    {
        [cardRequest]: () => null,
        [cardSuccess]: (_state, action) => action.payload,
        [cardFailure]: () => null,
    },
    null
);

const error = handleActions(
    {
        [cardRequest]: () => null,
        [cardSuccess]: () => null,
        [cardFailure]: (_state, action) => action.payload,
    },
    null
);

export default combineReducers({
    cardData,
    error,
});
