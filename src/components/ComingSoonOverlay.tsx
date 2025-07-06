'use client';
import React from 'react';

const ComingSoonOverlay = () => {
    return (
        <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none bg-black rounded-full overflow-hidden flex items-center">
            <div className="animate-marquee whitespace-nowrap text-white font-semibold text-sm px-4">
                <span className="mx-4"> Coming Soon </span>
                <span className="mx-4"> Coming Soon </span>
                <span className="mx-4"> Coming Soon </span>
                <span className="mx-4"> Coming Soon </span>
            </div>
        </div>
    );
};

export default ComingSoonOverlay;
