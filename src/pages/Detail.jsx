import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from '../components/common/LazyImage';
import { useOmdb } from '../hooks/useOmdb';
import { ArrowLeft, Star, Calendar, Clock, Film, Grip, Globe, PenTool, Award } from 'lucide-react';

export default function Detail() {
  const { id } = useParams();
  const { getMovieDetail, loading, error } = useOmdb();
  const [movie, setMovie] = useState(null);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getMovieDetail(id);
      if (data) {
        setMovie(data);
      } else {
        setLocalError('Movie not found');
      }
    };

    fetchDetail();
  }, [id, getMovieDetail]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-light text-xl animate-pulse">Loading Details...</p>
        </div>
      </div>
    );
  }

  if (error || localError || !movie) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 text-center">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-light text-2xl mb-6 font-bold">{error || localError}</p>
        <Link to="/" className="bg-accent hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
          <ArrowLeft size={20} /> Back Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{movie.Title} - MovieDB</title>
        <meta name="description" content={movie.Plot !== 'N/A' ? movie.Plot : `Details about ${movie.Title}`} />
        <meta property="og:title" content={`${movie.Title} (${movie.Year})`} />
        <meta property="og:description" content={movie.Plot !== 'N/A' ? movie.Plot : `Details about ${movie.Title}`} />
        <meta property="og:image" content={movie.Poster} />
        <meta property="og:type" content="video.movie" />
      </Helmet>

      <div className="min-h-screen bg-primary text-light pb-20">

        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors font-semibold group">
            <div className="bg-black/30 p-2 rounded-full group-hover:bg-black/50 transition-colors backdrop-blur-sm">
              <ArrowLeft size={24} />
            </div>
            <span className="drop-shadow-md">Back to Search</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0">
            <LazyImage
              src={movie.Poster}
              alt="Background"
              className="w-full h-full object-cover blur-xl opacity-40 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary" />
          </div>

          <div className="absolute inset-0 flex items-end justify-center pb-12 px-4 max-w-7xl mx-auto">
            <div className="w-full flex flex-col md:flex-row gap-8 items-end">
              {/* Poster Card */}
              <div className="hidden md:block w-72 h-[420px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/5 flex-shrink-0 relative group">
                <LazyImage
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hero Info */}
              <div className="flex-1 mb-4">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-semibold tracking-wider">
                  {movie.Rated !== 'N/A' && (
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded border border-white/20 text-gray-200">
                      {movie.Rated}
                    </span>
                  )}
                  {movie.Runtime !== 'N/A' && (
                    <span className="flex items-center gap-1 text-gray-300">
                      <Clock size={16} className="text-accent" /> {movie.Runtime}
                    </span>
                  )}
                  {movie.Type && (
                    <span className="flex items-center gap-1 uppercase text-accent">
                      <Film size={16} /> {movie.Type}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-2 leading-tight drop-shadow-lg">
                  {movie.Title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <span className="text-2xl text-gray-300 font-light">{movie.Year}</span>

                  {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <Star size={28} className="text-yellow-400 fill-current" />
                      <span className="text-3xl font-bold text-white">{movie.imdbRating}</span>
                      <span className="text-gray-400 text-sm mt-2">/10</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {movie.Genre && movie.Genre !== 'N/A' && movie.Genre.split(', ').map((genre) => (
                    <span key={genre} className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm hover:bg-accent hover:text-white transition-colors cursor-default">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Col: Poster Mobile & additional info */}
          <div className="md:hidden">
            <div className="w-48 h-72 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 -mt-24 mb-8">
              <LazyImage
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Plot */}
            <section className="animate-slideIn">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="w-1 h-8 bg-accent rounded-full block"></span> Synopsis
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {movie.Plot !== 'N/A' ? movie.Plot : 'No synopsis available.'}
              </p>
            </section>

            {/* Cast & Crew */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {movie.Director !== 'N/A' && (
                <div className="bg-secondary/50 p-6 rounded-xl border border-white/5">
                  <h4 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <Film size={16} /> Director
                  </h4>
                  <p className="text-white font-semibold text-lg">{movie.Director}</p>
                </div>
              )}
              {movie.Writer !== 'N/A' && (
                <div className="bg-secondary/50 p-6 rounded-xl border border-white/5">
                  <h4 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <PenTool size={16} /> Writer
                  </h4>
                  <p className="text-white font-semibold text-lg">{movie.Writer}</p>
                </div>
              )}
            </div>

            {movie.Actors !== 'N/A' && (
              <div className="bg-secondary/30 p-8 rounded-xl border border-white/5">
                <h4 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                  <Grip size={16} /> Top Cast
                </h4>
                <div className="flex flex-wrap gap-3">
                  {movie.Actors.split(', ').map(actor => (
                    <div key={actor} className="flex items-center gap-3 bg-primary px-4 py-3 rounded-lg border border-gray-700/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                        {actor.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-200">{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-secondary rounded-xl p-6 border border-white/5 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Information</h3>

              <div className="space-y-4">
                {movie.Released !== 'N/A' && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1 flex items-center gap-2"><Calendar size={14} /> Released</p>
                    <p className="text-white font-medium">{movie.Released}</p>
                  </div>
                )}
                {movie.Country !== 'N/A' && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1 flex items-center gap-2"><Globe size={14} /> Country</p>
                    <p className="text-white font-medium">{movie.Country}</p>
                  </div>
                )}
                {movie.Language !== 'N/A' && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Language</p>
                    <p className="text-white font-medium">{movie.Language}</p>
                  </div>
                )}
              </div>
            </div>

            {movie.Awards !== 'N/A' && (
              <div className="bg-gradient-to-br from-accent/20 to-secondary rounded-xl p-6 border border-accent/20 shadow-lg">
                <h3 className="text-accent font-bold mb-3 flex items-center gap-2">
                  <Award size={20} /> Awards
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {movie.Awards}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
