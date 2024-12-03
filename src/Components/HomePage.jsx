import React from 'react';
import './Homepage.css'; // Assuming you have styles for the homepage

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="sidebar">
        <div className="filter-title">Filters</div>
        <div className="filter-category">Category</div>
        <div className="dropdown-container">
          <label className="dropdown-label">Select Category</label>
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>Movie 1</h3>
          <p>Description of Movie 1</p>
        </div>
        <div className="content-card">
          <h3>Movie 2</h3>
          <p>Description of Movie 2</p>
        </div>
        <div className="content-card">
          <h3>Movie 3</h3>
          <p>Description of Movie 3</p>
        </div>
      </div>
    </div>
  );
}
