import React, { useRef, useCallback } from 'react';
import MovieCard from './MovieCard';
import SkeletonCard from '../../common/SkeletonCard';
import { Film } from 'lucide-react';

export default function MoviesGrid({ movies = [], isLoading, hasMore, onLoadMore }) {
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

    if (movies.length === 0 && !isLoading) return null;

    return (
        <div className="py-12 px-6 bg-primary min-h-[50vh]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
                    <div>
                        <br></br>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter flex items-center gap-3">
                            <span className="text-accent">🍿</span> Explore Movies
                        </h2>
                        <br></br>
                    </div>
                    <div className="hidden md:block bg-secondary px-6 py-2 rounded-full border border-white/10 text-sm font-bold text-white shadow-lg">
                        {movies.length} TITLES
                    </div>
                </div>

                {/* Cinematic Grid: 3 Columns Desktop, 2 Tablet, 1 Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    <div className="text-center py-16 border-t border-white/5">
                        <div className="inline-flex p-4 rounded-full bg-secondary/50 text-gray-500 mb-4">
                            <Film size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">That's all for now</h3>
                        <p className="text-gray-500">You've reached the end of the collection.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
