import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Assuming you have styles for the homepage

export default function Homepage() {
  const navigate = useNavigate();

  // Randomized content card values
  const allMovies = [
    { title: 'Movie 1', actor: 'Vijay', rating: '3.5+', language: 'Tamil', genre: 'Action', streamingPlatforms: 'Disney+' },
    { title: 'Movie 2', actor: 'Prabhas', rating: '4.5+', language: 'Telugu', genre: 'Thriller', streamingPlatforms: 'ZeeTv' },
    { title: 'Movie 3', actor: 'Ajith', rating: '2.5+', language: 'Hindi', genre: 'Comedy', streamingPlatforms: 'SonyLiv' },
    { title: 'Movie 4', actor: 'Yogi Babu', rating: '3+', language: 'Tamil', genre: 'Horror', streamingPlatforms: 'Disney+' },
    { title: 'Movie 5', actor: 'Vijay', rating: '3.5+', language: 'Telugu', genre: 'Action', streamingPlatforms: 'Hulu' },
    { title: 'Movie 6', actor: 'Prabhas', rating: '4.5+', language: 'English', genre: 'Thriller', streamingPlatforms: 'HBO Max' },
    { title: 'Movie 7', actor: 'Ajith', rating: '3+', language: 'Hindi', genre: 'Comedy', streamingPlatforms: 'Netflix' },
    { title: 'Movie 8', actor: 'Yogi Babu', rating: '2.5+', language: 'Telugu', genre: 'Horror', streamingPlatforms: 'SonyLiv' },
    { title: 'Movie 9', actor: 'Vijay', rating: '3.5+', language: 'Tamil', genre: 'Thriller', streamingPlatforms: 'ZeeTv' },
    { title: 'Movie 10', actor: 'Prabhas', rating: '4.5+', language: 'Hindi', genre: 'Comedy', streamingPlatforms: 'Netflix' },
  ];

  const [selectedActor, setSelectedActor] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedStreaming, setSelectedStreaming] = useState('All');

  const handleLogout = () => {
    navigate('/');
  };

  const handleFilterChange = (type, value) => {
    switch (type) {
      case 'actor':
        setSelectedActor(value);
        break;
      case 'rating':
        setSelectedRating(value);
        break;
      case 'language':
        setSelectedLanguage(value);
        break;
      case 'genre':
        setSelectedGenre(value);
        break;
      case 'streaming':
        setSelectedStreaming(value);
        break;
      default:
        break;
    }
  };

  const clearFilters = () => {
    setSelectedActor('All');
    setSelectedRating('All');
    setSelectedLanguage('All');
    setSelectedGenre('All');
    setSelectedStreaming('All');
  };

  const getNumericRating = (rating) => {
    return parseFloat(rating.replace('+', '')); // Remove '+' and convert to float
  };

  const filteredMovies = allMovies.filter((movie) => {
    let ratingMatch = true;
    if (selectedRating !== 'All') {
      const movieRating = getNumericRating(movie.rating);
      const selectedRatingValue = getNumericRating(selectedRating);
      ratingMatch = movieRating >= selectedRatingValue;
    }

    return (
      (selectedActor === 'All' || movie.actor === selectedActor) &&
      ratingMatch &&
      (selectedLanguage === 'All' || movie.language === selectedLanguage) &&
      (selectedGenre === 'All' || movie.genre === selectedGenre) &&
      (selectedStreaming === 'All' || movie.streamingPlatforms === selectedStreaming)
    );
  });

  const isFilterApplied = 
    selectedActor !== 'All' ||
    selectedRating !== 'All' ||
    selectedLanguage !== 'All' ||
    selectedGenre !== 'All' ||
    selectedStreaming !== 'All';

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <div className="filter-title">Filters</div>

        {/* Actors Filter */}
        <div className="filter-category">Actors</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedActor}
            onChange={(e) => handleFilterChange('actor', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Vijay">Vijay</option>
            <option value="Prabhas">Prabhas</option>
            <option value="Ajith">Ajith</option>
            <option value="Yogi Babu">Yogi Babu</option>
          </select>
        </div>

        {/* Ratings Filter */}
        <div className="filter-category">Ratings</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedRating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
          >
            <option value="All">All</option>
            <option value="2.5+">2.5+</option>
            <option value="3+">3+</option>
            <option value="3.5+">3.5+</option>
            <option value="4.5+">4.5+</option>
          </select>
        </div>

        {/* Languages Filter */}
        <div className="filter-category">Languages</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedLanguage}
            onChange={(e) => handleFilterChange('language', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </div>

        {/* Genre Filter */}
        <div className="filter-category">Genre</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedGenre}
            onChange={(e) => handleFilterChange('genre', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        {/* Streaming Platforms Filter */}
        <div className="filter-category">Streamings</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedStreaming}
            onChange={(e) => handleFilterChange('streaming', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Disney+">Disney+</option>
            <option value="ZeeTv">ZeeTv</option>
            <option value="SonyLiv">SonyLiv</option>
            <option value="Hulu">Hulu</option>
            <option value="Netflix">Netflix</option>
            <option value="HBO Max">HBO Max</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
  <button
    className={`buttons exe clear-filters ${isFilterApplied ? '' : 'disabled'}`}
    onClick={clearFilters}
    disabled={!isFilterApplied}
    style={{
      flex: 1,
      padding: '10px',
      backgroundColor: isFilterApplied ? '#e74c3c' : '#ccc',
      color: isFilterApplied ? 'white' : '#888',
      borderRadius: '5px',
      cursor: isFilterApplied ? 'pointer' : 'not-allowed',
    }}
  >
    Clear
  </button>

  <button
    className="buttons exe"
    onClick={handleLogout}
    style={{
      flex: 1,
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
    Logout
  </button>
</div>

      </div>

      <div className="content-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div className="content-card" key={index}>
              <h3>{movie.title}</h3>
              <div className="movie-details">
                <p><strong>Actor:</strong> {movie.actor}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Language:</strong> {movie.language}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Streaming Platform:</strong> {movie.streamingPlatforms}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No Movies Found.</div>
        )}
      </div>
    </div>
  );
}
