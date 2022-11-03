export const MovieCard=({el})=> {
    return(
        <div>
            <h1>{el.title}</h1>
           <img src={el.posterURL}/>
           <p>{el.description}</p>
           <p>{el.rating}</p>
        </div>
    )
}