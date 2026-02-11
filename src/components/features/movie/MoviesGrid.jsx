import React, { useRef, useCallback } from 'react';
import MovieCard from './MovieCard';
import SkeletonCard from '../../common/SkeletonCard';
import { Film } from 'lucide-react';

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
        <div className="py-12 px-4 bg-primary min-h-[50vh]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-slideIn flex items-center gap-3">
                            <span className="text-accent">🎬</span> Explore Movies
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">Discover the latest blockbusters and classic favorites</p>
                    </div>
                    <div className="bg-secondary/50 px-4 py-2 rounded-lg border border-gray-700 text-sm font-semibold text-gray-300">
                        {movies.length} Results
                    </div>
                </div>

                {/* Adjusted to 3 columns on desktop as per request */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
                    <div className="text-center py-12">
                        <div className="inline-block p-4 rounded-full bg-secondary text-gray-400 mb-2">
                            <Film size={24} />
                        </div>
                        <p className="text-gray-500 font-medium">You've reached the end of the list</p>
                    </div>
                )}
            </div>
        </div>
    );
}
