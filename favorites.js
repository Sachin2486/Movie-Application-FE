import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieGrid from '../components/MovieGrid';

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/movies/favorites', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMovies(response.data);
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6">My Favorites</h2>
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
}
