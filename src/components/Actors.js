import React from "react";
import { actors } from "../data";

console.log(actors)

const actorsToDisplay = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h4>Name: {actor.name}</h4>
      Movies: 
      {
        actor.movies.map(movie => 
          <ul>
            <li>{movie}</li>
          </ul>)
      }
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay}
    </div>
  )
}

export default Actors;
