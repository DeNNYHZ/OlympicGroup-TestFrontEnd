import React, { useRef, useCallback } from 'react';
import MovieCard from './MovieCard';
import SkeletonCard from './SkeletonCard';

export default function MoviesGrid({ movies, isLoading, hasMore, onLoadMore }) {
  const observer = useRef();

  const lastMovieElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        onLoadMore();
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, onLoadMore]);

  if (movies.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className="py-12 px-4 bg-primary border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-light mb-2 animate-slideIn">
            🎬 Movies
          </h2>
          <p className="text-gray-400">{movies.length} results found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {movies.map((movie, index) => {
            if (movies.length === index + 1) {
              return (
                <div ref={lastMovieElementRef} key={`${movie.imdbID}-${index}`}>
                  <MovieCard movie={movie} />
                </div>
              );
            } else {
              return <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />;
            }
          })}

          {isLoading && (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
        </div>

        {!hasMore && movies.length > 0 && (
          <div className="text-center text-gray-500 mt-8">
            You have seen it all!
          </div>
        )}
      </div>
    </div>
  );
}
