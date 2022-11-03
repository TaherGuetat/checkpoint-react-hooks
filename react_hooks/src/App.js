import "./App.css";
import { MovieList } from "./Component/MovieList";
import { AddMovie } from "./Component/AddMovie";
import { Filter } from "./Component/Filter(title,rate)";
import { useState } from "react";

function App() {

  const [movieList, setMovieList] = useState([
    {
      title: "Aquaman",
      description:
        "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg",
      rating: 6.8,
      id:0,
    },
    {
      title: "The white lotus",
      description:
        "Set in a tropical resort, it follows the exploits of various guests and employees over the span of a week.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOWY1YjY1MWUtYWY5Yi00YTM4LTkyM2UtMDQ3NmFiYTkyYjlkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rating: 7.6,
      id:1,
    },
  ]);
const handleAdd=(newMovie)=>{
  setMovieList([...movieList,newMovie])
}

const handleFilter = (newStatus)=>{
  setMovieList([...movieList,newStatus]);
}
  return (
    <div className="App">
      <MovieList movieList={movieList} />
      <AddMovie handleAdd={handleAdd}/>
      <Filter handleFilter={handleFilter} />
    </div>
  );
}

export default App;
