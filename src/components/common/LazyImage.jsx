import { useState, useEffect } from 'react';

// Simple LazyImage that defaults to placeholder and swaps to src on load
// Removed complex IntersectionObserver re-triggering logic to prevent flickering
export default function LazyImage({ src, alt, className, placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMmUiLz48L3N2Zz4=' }) {
    const [currentSrc, setCurrentSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Reset state when src changes
        setIsLoaded(false);
        setCurrentSrc(placeholder);

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setCurrentSrc(src);
            setIsLoaded(true);
        };

        img.onerror = () => {
            // If error, we keep placeholder or set a specific error image
            // For now, keep placeholder to avoid broken icon
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, placeholder]);

    return (
        <div className={`relative overflow-hidden ${className} bg-gray-800`}>
            <img
                src={currentSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-100 scale-105 blur-sm'}`}
            />
        </div>
    );
}
