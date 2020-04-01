import React from 'react';
import Header from '../header';

import './index.css';

const Layout = ({ handlerMenu, children }) => (
    <>
        <Header handlerMenu={handlerMenu} />
        <div>{children}</div>
    </>
);

export default Layout;
