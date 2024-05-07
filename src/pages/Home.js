import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"

function Home() {
const [movie, setMovie] = useState([])

useEffect(()=> {
  fetch("http://localhost:4000/movies")
  .then(r=> r.json())
  .then(data => setMovie(data))
},[])

const titleList= movie.map((m)=> {
  return(
    <div> 
      <MovieCard key={m.id} movie={m} />
    </div>
    
  )
})

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Info goes here! */}
        <h1> Home Page </h1>
        <ul>
        {titleList}
        </ul>
      </main>
    </>
  );
};

export default Home;
