import { useState } from "react";
import StarRatingComponent from "react-star-rating-controlled-component";

export function Filter({ filterTitle,filterRate ,rate}) {
 

  const handleClick=value=>{
   
    filterRate(value);
  };
  return (
    <div>
      <input
        placeholder="Search by title"
        onChange={(e) => filterTitle(e.target.value)}
      />
      <button>Search</button>
      
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
