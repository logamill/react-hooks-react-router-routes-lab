import React from "react";
import { movies } from "../data";


const moviesToDisplay = movies.map((movie) => {
  return (
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
        <p>Runtime: {movie.time}</p>
        Genres:
        {
          movie.genres.map(genre => 
            <div key={genre}>
              <ul>
                <li>{genre}</li>
              </ul>
            </div>)
        }
    </div>
  )})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  )
}

export default Movies;
