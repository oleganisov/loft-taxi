import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App.js';

jest.mock('./components/map', () => () => <div>Карта</div>);

describe('App', () => {
    it('reneders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('print', () => {
        const { debug } = render(<App />);
        // Pretty print the DOM tree of your render
        debug();
    });
});
