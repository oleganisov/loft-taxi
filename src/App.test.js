import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import { render, fireEvent, wait } from '@testing-library/react';
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
    let getByTestId, getByText;
    beforeEach(() => {
        const queries = render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
        getByTestId = queries.getByTestId;
        getByText = queries.getByText;
    });

    it('click link register/login', () => {
        fireEvent.click(getByText(/зарегистрируйтесь/i));
        expect(getByTestId('signup-form')).toBeTruthy();

        fireEvent.click(getByText(/войти/i));
        expect(getByTestId('login-form')).toBeTruthy();
    });

    it('login submit', () => {
        fireEvent.click(getByTestId('login-submit'), {
            target: { username: 'john@enterprise.com', password: 'enterprise' },
        });

        wait(() => expect(getByText(/выйти/i)).toBeTruthy());
    });
    it('logout', () => {
        fireEvent.click(getByTestId('login-submit'), {
            target: { username: 'john@enterprise.com', password: 'enterprise' },
        });

        wait(() => fireEvent.click(getByText(/выйти/i)));
        wait(() => expect(getByText(/новый пользователь/i)).toBeTruthy());
    });
});
