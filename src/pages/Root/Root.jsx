import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header>Header</header>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default Root;