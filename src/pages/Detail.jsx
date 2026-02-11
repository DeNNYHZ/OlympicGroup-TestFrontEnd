import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from '../components/common/LazyImage';
import { useOmdb } from '../hooks/useOmdb';
import { ArrowLeft, Star, Clock, Film, Award, LayoutGrid, Calendar } from 'lucide-react';

export default function Detail() {
  const { id } = useParams();
  const { getMovieDetail, loading, error } = useOmdb();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getMovieDetail(id);
      if (data) setMovie(data);
    };
    fetch();
  }, [id, getMovieDetail]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-primary pb-20 font-sans text-gray-100">
      <Helmet>
        <title>{movie.Title} | StreamFlix</title>
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
        <Link to="/" className="pointer-events-auto inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-accent transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold tracking-wide drop-shadow-md">Back</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 select-none">
          <LazyImage
            src={movie.Poster}
            className="w-full h-full object-cover opacity-40 blur-3xl scale-125 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          {/* Mesh Grain Overlay for Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

            {/* Poster (Floating) */}
            <div className="hidden md:block md:col-span-4 lg:col-span-3">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 rotate-1 hover:rotate-0 transition-transform duration-500">
                <LazyImage src={movie.Poster} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6 mb-12">
              {/* Breadcrumbs / Badges */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold tracking-wider">
                {movie.Rated !== 'N/A' && <span className="bg-white/10 backdrop-blur px-3 py-1 rounded text-white">{movie.Rated}</span>}
                <span className="flex items-center gap-1 text-accent"><Clock size={16} /> {movie.Runtime}</span>
                <span className="text-gray-400 uppercase">{movie.Type}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-white drop-shadow-2xl">
                {movie.Title}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-6">
                {movie.imdbRating !== 'N/A' && (
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-current" size={32} />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white leading-none">{movie.imdbRating}</span>
                      <span className="text-xs text-gray-500">IMDb Score</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-accent hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-accent/40 flex items-center gap-2">
                  <Film size={20} fill="currentColor" /> Watch Trailer
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
                  + Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-20 relative z-10">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-12">

          {/* Plot */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" /> Storyline
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {movie.Plot}
            </p>
          </section>

          {/* Cast Grid */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-6">Top Cast</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {movie.Actors.split(', ').map(actor => (
                <div key={actor} className="bg-secondary p-4 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center font-bold text-gray-400 text-xs">
                    {actor.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-200">{actor}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-secondary p-6 rounded-xl border border-white/5 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">Movie Info</h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Released</span>
                <span className="text-white font-medium">{movie.Released}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Director</span>
                <span className="text-white font-medium text-right">{movie.Director}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Genre</span>
                <span className="text-white font-medium text-right text-accent">{movie.Genre}</span>
              </div>
            </div>
          </div>

          {movie.Awards !== 'N/A' && (
            <div className="bg-gradient-to-br from-accent/10 to-secondary p-6 rounded-xl border border-accent/20">
              <div className="flex items-start gap-3">
                <Award className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Awards</h4>
                  <p className="text-sm text-gray-400">{movie.Awards}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
