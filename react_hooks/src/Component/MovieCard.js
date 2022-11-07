import { AddMovie} from "./AddMovie";
export const MovieCard=({el})=> {
    return(
        <div>
            <h1>{el.title}</h1>
           <img src={el.posterURL} width={'90px'}/>
           <p>{el.description}</p>
           <p>{el.rating}</p>
        
        </div>
    )
}