import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../template/Header/Header';
import Footer from '../../template/Footer/Footer';

const Public = () => {
    return (
        <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
            <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300">
                <div className="max-w-7xl mx-auto px-4 lg:px-6">
                    <Header />
                </div>
            </header>
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
                    <Outlet />
                </div>
            </main>
            <footer className="border-t border-base-300 bg-base-200">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Public;