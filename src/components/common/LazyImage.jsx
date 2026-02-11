import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

export default function LazyImage({ src, alt, className, placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMmUiLz48L3N2Zz4=' }) {
    const [currentSrc, setCurrentSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
        setCurrentSrc(placeholder);

        if (!src || src === 'N/A') {
            setHasError(true);
            return;
        }

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setCurrentSrc(src);
            setIsLoaded(true);
        };

        img.onerror = () => {
            setHasError(true);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, placeholder]);

    return (
        <div className={`relative overflow-hidden ${className} bg-gray-800`}>
            {hasError ? (
                <div className="flex flex-col items-center justify-center w-full h-full text-gray-600 bg-gray-900">
                    <ImageOff size={32} className="mb-2 opacity-50" />
                    <span className="text-xs uppercase font-bold tracking-widest opacity-50">No Image</span>
                </div>
            ) : (
                <img
                    src={currentSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-100 scale-105 blur-sm'}`}
                />
            )}
        </div>
    );
}
