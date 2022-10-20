import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {
    productDetails="No Details Available",
    title="No title",
    imageUrl=" ",
    price="0",
  } = props.cardData;


  return (
    <div class="card text-center">
      <img src={imageUrl} class="card-img-top" alt="..." style={{width:"200px", height:"140px"}} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <div>
        <span style={{"font-weight":"bold"}}>Price &#8377; {price}   </span>
        <Link to={{pathname:'./details', state:{productDetails, title, imageUrl, price}}}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
