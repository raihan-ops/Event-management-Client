import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-red-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
    </div>
    );
};

export default Spinner;