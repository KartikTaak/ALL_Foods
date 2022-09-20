import React, { useState } from "react";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  const [hide,setHide]=useState({});

  const Hide=()=>{
    setHide({
      display:"none"
    })
  }

  return (<>
  
      <div class="card py-2 text-center" style={hide}>
      <i class="fa fa-times" aria-hidden="true" onClick={Hide} ></i>
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
        <i class="fa fa-heart" aria-hidden="true" ></i>
      </div>
      </>
  );
};

export default RecipeItem;