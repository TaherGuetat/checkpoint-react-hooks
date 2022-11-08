import "bootstrap/dist/css/bootstrap.min.css"
export const MovieListHeading=(props)=>{
    return(
        <div className="col">
            <h1>{props.heading}</h1>
        </div>
    )
}