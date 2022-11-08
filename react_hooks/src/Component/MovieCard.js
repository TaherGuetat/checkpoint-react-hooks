export const MovieCard = ({ el }) => {
  return (
    <div className="movie">
      <img src={el.posterURL} width={"200px"} />
      <div className="movie-info">
        <h3>{el.title}</h3>
        <span>{el.rating}</span>
        <div className="movie-over">
          <h2>Description</h2>
          <p>{el.description}</p>
        </div>
      </div>
    </div>
  );
};
