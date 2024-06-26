import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar";

function Movie() {
const [movieProfile, setMovieProfile]= useState({})
const params = useParams()
const movieId = params.id


useEffect(()=> {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then (r => r.json())
  .then(data=> setMovieProfile(data))
  .catch(error => console.error(error))
},[movieId])

if(!movieProfile.title){
  return <h1>Loading...</h1>
}

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1> {movieProfile.title} </h1>
      <p> {movieProfile.time} minutes</p>
        {movieProfile.genres.map((genre)=> {
          return(
            <span key={genre}> {genre} </span>
          )
        })}
      </main>
    </>
  );
};

export default Movie;
