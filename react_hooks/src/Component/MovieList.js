import { MovieCard } from "./MovieCard";
export const MovieList= ({movieList})=> {
    return(
        <div>
            {movieList.map(
                (el)=><MovieCard el={el} key={el.id} />
            )}
        </div>
    )
}