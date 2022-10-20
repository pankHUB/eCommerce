import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = (props) => {
  let data = useLocation();
  //console.log(data.state.title);
  return (
    <div>Product Details Page</div>
  )
}

export default ProductDetail;
