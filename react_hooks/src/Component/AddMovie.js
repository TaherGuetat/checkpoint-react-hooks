import { useState } from "react";
export const AddMovie = ({handleAdd}) => {
    const [movie,setMovie]=useState("");
    const handleChange =(e)=>{
        setMovie(e.target.value)
    };
    const Add=()=>{
        if (movie.trim()) {
            handleAdd({title:movie.trim(),id:Math.random(),description:"",rating:'',posterURL:""})
        } else {
            alert('enter movie title')
            
        }
    }
  return (
    <div>
      <input type="text" onChange={handleChange} value={movie} />
      <button onClick={Add}>Add</button>
    </div>
  );
};