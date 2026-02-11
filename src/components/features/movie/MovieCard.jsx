import { Link } from 'react-router-dom';
import LazyImage from '../../common/LazyImage';
import { Star, PlayCircle } from 'lucide-react';

export default function MovieCard({ movie }) {
    return (
        <Link to={`/detail/${movie.imdbID}`} className="group relative block bg-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 border border-white/5 hover:border-accent/30">
            {/* Image Container with Aspect Ratio */}
            <div className="aspect-[2/3] relative overflow-hidden">
                <LazyImage
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-75"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle size={48} className="text-white fill-white/10 drop-shadow-lg" />
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                    {movie.Type}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 relative">
                <h3 className="text-white font-bold text-lg leading-tight line-clamp-1 mb-1 group-hover:text-accent transition-colors">
                    {movie.Title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{movie.Year}</span>
                    {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star size={12} fill="currentColor" />
                            <span className="text-white text-xs font-bold">{movie.imdbRating}</span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
