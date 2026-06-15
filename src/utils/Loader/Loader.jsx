import React from 'react';
import Logo from '../Logo/Logo';

const Loader = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-3">
            <div className="p-10 bg-base-200 rounded-full">
                <span className="loading loading-bars loading-xl"></span>
            </div>
            <Logo />
        </div>
    );
};

export default Loader;