import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={logo} alt="CreaWin" className='lg:w-8 w-6' />
            <p className='text-secondary lg:text-2xl text-xl font-bold'>
                CreaWin
            </p>
        </div>
    );
};

export default Logo;