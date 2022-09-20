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
      <div class="text-right me-3"><i class="fa fa-times fa-lg" aria-hidden="true" onClick={Hide} ></i></div>
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <ul>
        <li class="mb-1">
        <button class="btn btn-toggle " data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Ingredients
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group list-group-flush">    
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
          </ul>
        </div>
      </li>
      </ul>
        <i class="fa fa-heart" aria-hidden="true" ></i>
      </div>
      </>
  );
};

export default RecipeItem;