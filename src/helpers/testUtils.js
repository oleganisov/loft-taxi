import React from 'react';
import { render } from '@testing-library/react';
import createStore from '../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { runSaga } from 'redux-saga';

export const renderWithProviders = (children, store = createStore()) => {
    return render(
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <BrowserRouter>{children}</BrowserRouter>
            </MuiPickersUtilsProvider>
        </Provider>
    );
};

export async function recordSaga(saga, initialAction) {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
        },
        saga,
        initialAction
    ).done;

    return dispatched;
}
