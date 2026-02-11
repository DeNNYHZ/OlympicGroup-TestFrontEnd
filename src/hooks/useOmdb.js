import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = import.meta.env.VITE_OMDB_API_URL;

export const useOmdb = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const searchMovies = useCallback(async (query, page = 1, type = 'movie') => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          s: query,
          type: type,
          page: page,
        },
      });

      if (response.data && response.data.Response === 'True') {
        const results = response.data.Search || [];
        const total = parseInt(response.data.totalResults, 10);

        if (type === 'movie') {
          const detailedMoviePromises = results.map(async (item) => {
            try {
              const detailResponse = await axios.get(API_URL, {
                params: {
                  apikey: API_KEY,
                  i: item.imdbID,
                  plot: 'short'
                }
              });
              if (detailResponse.data && detailResponse.data.Response === 'True') {
                return detailResponse.data;
              }
              return item;
            } catch (e) {
              return item;
            }
          });

          const detailedMovies = await Promise.all(detailedMoviePromises);

          if (page === 1) {
            setMovies(detailedMovies);
          } else {
            setMovies(prev => [...prev, ...detailedMovies]);
          }
          setHasMore(total > page * 10);
          setTotalResults(total);
        } else if (type === 'series') {
          const detailedSeriesPromises = results.map(async (item) => {
            try {
              const detailResponse = await axios.get(API_URL, {
                params: {
                  apikey: API_KEY,
                  i: item.imdbID,
                  plot: 'short'
                }
              });
              if (detailResponse.data && detailResponse.data.Response === 'True') {
                return detailResponse.data;
              }
              return item;
            } catch (e) {
              return item;
            }
          });

          const detailedSeries = await Promise.all(detailedSeriesPromises);
          setSeries(detailedSeries);
        }
      } else {
        if (page === 1) {
          setError(response.data?.Error || 'Something went wrong');
          if (type === 'movie') setMovies([]);
          if (type === 'series') setSeries([]);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMovieDetail = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          i: id,
          plot: 'full',
        },
      });
      if (response.data && response.data.Response === 'True') {
        return response.data;
      } else {
        setError(response.data?.Error || 'Something went wrong');
        return null;
      }
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movies,
    series,
    loading,
    error,
    hasMore,
    searchMovies,
    getMovieDetail,
    setMovies,
    setSeries
  };
};
