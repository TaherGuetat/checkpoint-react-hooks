import './App.css';
import { movies } from "./Component/data";
import { MovieCard } from "./Component/MovieCard";
import { MovieList } from "./Component/MovieList";
import { Filter } from "./Component/Filter(title,rate)";
import {  useState} from "react";

function App() {
  const [movielist,setMovielist]=useState(movies)
  const handeladd=(newmovie)=>{
    setMovielist([...movielist,newmovie])
  }
  return (
    <div className="App">
      <MovieList list={movielist}/>
      <Filter/>

    </div>
  );
}

export default App;
