export const MovieCard=({movie:{title,description,posterURL,rating}})=> {
    return(
        <div>
            <h1>{title}</h1>
           <img src={posterURL}/>
           <p>{description}</p>
           <p>{rating}</p>
        </div>
    )
}