import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { cardRequest, cardSuccess, cardFailure } from './actions';

const data = handleActions(
    {
        [cardSuccess]: (_state, action) => action.payload,
    },
    []
);

export default combineReducers({
    data,
});
