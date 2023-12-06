import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import './App.css';
import SignUp from "./components/Signup.js";
import Pacotes from "./components/pacotes.js";




function App() {
  return (
    <div className="App">  
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/pacotes' element={<Pacotes />}></Route>
          <Route path='/' element={<Pacotes />}></Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
