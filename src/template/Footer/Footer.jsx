import React from 'react';

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="font-bold text-lg text-secondary">CreaWin</h3>
                    <p className="text-sm font-serif opacity-70">Create. Compete. Win.</p>
                </div>
                <div className="text-sm font-serif opacity-70">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;