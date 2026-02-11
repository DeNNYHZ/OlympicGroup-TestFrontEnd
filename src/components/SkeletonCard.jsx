import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div className="h-64 bg-gray-700 w-full"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-700 rounded w-full"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
