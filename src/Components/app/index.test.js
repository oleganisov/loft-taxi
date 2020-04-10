import React from 'react';
import { render } from '@testing-library/react';
import App from './index.js';

jest.mock('../map', () => () => <div>Карта</div>);

describe('App', () => {
    it('print', () => {
        const { debug } = render(<App />);
        // Pretty print the DOM tree of your render
        debug();
    });
});
