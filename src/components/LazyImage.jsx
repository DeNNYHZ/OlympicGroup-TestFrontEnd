import { useState, useEffect, useRef } from 'react';

export default function LazyImage({ src, alt, className, placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMmUiLz48L3N2Zz4=' }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const imgElement = imageRef.current;

    if (imgElement) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.onerror = () => {
                // Keep placeholder or set error image
                setImageSrc('/placeholder.png');
              };
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      observer.observe(imgElement);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Blur background */}
      <img
        src={placeholder}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 blur-sm ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      />

      {/* Actual Image */}
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
      />
    </div>
  );
}
