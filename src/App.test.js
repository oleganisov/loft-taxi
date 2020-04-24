import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const store = createStore();
jest.mock('./Components/map', () => () => <div>Map</div>);

describe('App render/print', () => {
    it('reneders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('print', () => {
        const { debug } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
        // Pretty print the DOM tree of your render
        debug();
    });
});

describe('Login/Signup', () => {
    let queryByTestId, getByText;
    beforeEach(() => {
        const queries = render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
        queryByTestId = queries.queryByTestId;
        getByText = queries.getByText;
    });

    it('click link register/login', () => {
        fireEvent.click(getByText(/зарегистрируйтесь/i));
        expect(queryByTestId('signup-form')).toBeTruthy();

        fireEvent.click(getByText(/войти/i));
        expect(queryByTestId('login-form')).toBeTruthy();
    });
});
