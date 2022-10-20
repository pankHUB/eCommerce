import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./Login/Login";
import ProductList from "./Product/ProductList";
import ProductDetail from "./Product/ProductDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const getUserDetails = (email, password) => {
    axios
      .post("http://localhost:4000/api/users/list", {
              email,
              password
      })
      .then((response) => {
        let data = response.json();
        console.log(data)
        setIsLoggedIn(true);
      })
      .catch ((err) =>{
      console.log("this is error" + err);
      })
  };


  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login getUserDetails={getUserDetails} />
      </div>
    );
  }

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/details" element = {<ProductDetail/>} />
        </Routes>
      </div>
    );
  
}

export default App;
