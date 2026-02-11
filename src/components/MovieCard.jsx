import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import LazyImage from './LazyImage';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/detail/${movie.imdbID}`} className="block h-full">
      <div className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300 animate-slideIn group cursor-pointer h-full flex flex-col border border-gray-800 hover:border-accent">
        <div className="relative h-64 md:h-[400px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <LazyImage
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {movie.Poster === 'N/A' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-500">
              <span className="text-xs">No Poster</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </div>

          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white b-1 border-white/10 uppercase tracking-widest">
            {movie.Type === 'series' ? 'Series' : 'Movie'}
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col bg-secondary relative">
          <h3 className="text-white font-bold text-lg line-clamp-2 mb-1 group-hover:text-accent transition-colors leading-tight">
            {movie.Title}
          </h3>
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700/50">
            <span className="text-gray-400 text-sm font-medium">{movie.Year}</span>
            <span className="text-accent text-xs font-semibold uppercase tracking-wider group-hover:underline">Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
