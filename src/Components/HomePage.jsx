import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Homepage.css'; // Assuming you have styles for the homepage

export default function Homepage() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <div className="filter-title">Filters</div>


        <div className="filter-category">Category</div>
        <div className="dropdown-container">
          
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>




        <div className="filter-category">Category</div>
        <div className="dropdown-container">
          
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>





        <div className="filter-category">Category</div>
        <div className="dropdown-container">
          
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>



         <div className="filter-category">Category</div>
        <div className="dropdown-container">
          
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>



        
        <div className="filter-category">Category</div>
        <div className="dropdown-container">
          
          <select className="dropdown">
            <option value="movies">Movies</option>
            <option value="tv-shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>







        <button className="buttons" onClick={handleLogout}>
          Logout
        </button>
      </div>



      <div className="content-grid">


        <div className="content-card">
          <h3>Movie 1</h3>
         
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>






        <div className="content-card">
          <h3>Movie 1</h3>
         
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>


        <div className="content-card">
          <h3>Movie 1</h3>
          
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>




        <div className="content-card">
          <h3>Movie 1</h3>
        
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>




        <div className="content-card">
          <h3>Movie 1</h3>
        
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>





        <div className="content-card">
          <h3>Movie 1</h3>
         
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>





        <div className="content-card">
          <h3>Movie 1</h3>
         
          <div className="movie-details"> <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 8.5/10</p>
            <p><strong>Streaming Platforms:</strong> Netflix, Amazon Prime</p>
            <p><strong>Languages:</strong> English, Spanish</p>
          </div>
        </div>



        <div className="content-card">
          <h3>Movie 2</h3>
         
          <div className="movie-details">
          <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 7.9/10</p>
            <p><strong>Streaming Platforms:</strong> Hulu, Disney+</p>
            <p><strong>Languages:</strong> English, French</p>
          </div>
        </div>


        <div className="content-card">
          <h3>Movie 3</h3>
         
          <div className="movie-details">
          <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Rating:</strong> 9.0/10</p>
            <p><strong>Streaming Platforms:</strong> HBO Max, Disney+</p>
            <p><strong>Languages:</strong> English, Italian</p>
          </div>
        </div>


      </div>
    </div>
  );
}
