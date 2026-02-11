import React from 'react';

const SkeletonSlider = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-secondary rounded-lg overflow-hidden h-48 flex">
                    <div className="w-1/3 bg-gray-700 h-full"></div>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonSlider;
