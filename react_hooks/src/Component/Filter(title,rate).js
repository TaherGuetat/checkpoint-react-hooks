
import StarRatingComponent from "react-star-rating-controlled-component";

export function Filter({ filterTitle,filterRate ,rate}) {
 

  const handleClick=value=>{
   
    filterRate(value);
  };
  return (
    <div className="col d-flex justify-content-end">
      <input
      className="col form-control "
        placeholder="Search by title"
        onChange={(e) => filterTitle(e.target.value)}
      />
      <button className="col col-sm-2 btn btn-primary" type="submit">Search</button>
      
        <StarRatingComponent
          starHoverColor="yellow"
          value={rate}
          starRatedColor="yellow"
          
          starCount={10}
          name="rate"
          onStarClick={handleClick}

        />
     
    </div>
  );
}
