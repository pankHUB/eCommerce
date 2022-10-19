import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUserDetails = async (email, password) => {
    console.log("inside user");
    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: {
    //         email,
    //         password
    //     }
    // };
    try {
      let response = await axios.get(
        "http://localhost:4000/loggedInUserDetails"
      );
      let data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
    } catch (err) {
      console.log("this is error" + err);
    }
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

    </div>
  );
}

export default App;
