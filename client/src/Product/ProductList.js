import React, {useState, useEffect} from 'react';
import axios from "axios";
import Grid2 from "@mui/material/Unstable_Grid2";

import ProductCard from './ProductCard';
import DetailModal from './ProductDetail';


const ProductList = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        getProductsDetails();
    }, []);

    const getProductsDetails = () => {
        axios
          .get("http://localhost:4000/api/products/list")
          .then((response) => {
            const {data}=response;
            setData(data);
          })
          .catch ((err) =>{
          console.log("this is error" + err);
          })
      };
  return (<>
  <h1>Products</h1>
  <Grid2 container rowSpacing={{ xs: 1, sm: 1, md: 1}} columnSpacing={{ xs: 0, sm: 0, md: 0}}>
    {data && data.map(value => {
        return <Grid2 xs={6} sm={2} md={3}><ProductCard cardData = {value} /></Grid2>
    })}
  </Grid2>
  </>
  )
}

export default ProductList;