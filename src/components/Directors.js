import React from "react";
import { directors } from "../data";

const renderDirectors = directors.map((director) => {
  return (
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      Movies:
        { director.movies.map(movie => 
        <div key={movie}>
          <ul>
            <li>{movie}</li>
          </ul>
        </div>
    ) }
    </div>
  )
})

function Directors() {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
        {renderDirectors}
    </div>
  )
}

export default Directors;
