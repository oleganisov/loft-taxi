import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App.js';
import createStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore();

jest.mock('./Components/map', () => () => <div>Карта</div>);

describe('App', () => {
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
