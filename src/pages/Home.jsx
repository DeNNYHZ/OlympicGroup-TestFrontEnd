import { useState } from 'react';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/common/SearchBar';
import SeriesSlider from '../components/features/series/SeriesSlider';
import MoviesGrid from '../components/features/movie/MoviesGrid';
import SkeletonSlider from '../components/common/SkeletonSlider';
import { useOmdb } from '../hooks/useOmdb';

export default function Home() {
  const [currentQuery, setCurrentQuery] = useState('');
  const [page, setPage] = useState(1);
  const { movies, series, loading, error, hasMore, searchMovies, setMovies, setSeries } = useOmdb();

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setCurrentQuery(query);
    setPage(1);
    setMovies([]);
    setSeries([]);

    searchMovies(query, 1, 'series');
    searchMovies(query, 1, 'movie');
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchMovies(currentQuery, nextPage, 'movie');
  };

  return (
    <>
      <Helmet>
        <title>MovieDB - Cari Film dan Series Terbaik</title>
        <meta name="description" content="Temukan dan jelajahi ribuan film dan series populer dengan mudah" />
        <meta property="og:title" content="MovieDB - Cari Film dan Series Terbaik" />
        <meta property="og:description" content="Temukan dan jelajahi ribuan film dan series populer dengan mudah" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MovieDB - Cari Film dan Series Terbaik" />
        <meta name="twitter:description" content="Temukan dan jelajahi ribuan film dan series populer dengan mudah" />
      </Helmet>

      <div className="min-h-screen bg-primary">
        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {error && (
          <div className="bg-red-900 bg-opacity-90 text-light py-4 px-4 text-center border-l-4 border-accent max-w-2xl mx-auto mt-4 rounded-lg shadow-lg animate-slideIn">
            <p className="font-semibold">⚠️ {error}</p>
          </div>
        )}

        {(loading && series.length === 0 && currentQuery) ? (
          <div className="py-12 px-4 bg-secondary border-b border-gray-700">
            <div className="max-w-7xl mx-auto">
              <SkeletonSlider />
            </div>
          </div>
        ) : (
          series.length > 0 && <SeriesSlider series={series} />
        )}

        <MoviesGrid
          movies={movies}
          isLoading={loading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />

        {!error && currentQuery && movies.length === 0 && series.length === 0 && !loading && (
          <div className="py-20 px-4 text-center">
            <div className="inline-block">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-light text-2xl font-semibold mb-2">
                Tidak ada hasil untuk "{currentQuery}"
              </p>
              <p className="text-gray-400">Coba cari dengan kata kunci yang berbeda</p>
            </div>
          </div>
        )}

        {!currentQuery && (
          <div className="pt-64 pb-32 px-4 text-center">
            <div className="inline-block">
              <p className="text-8xl mb-8">🎬</p>
              <p className="text-light text-4xl font-bold mb-4">
                Selamat Datang di MovieDB
              </p>
              <p className="text-gray-500 text-lg">
                Mulai dengan mengetik di search bar di atas
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
