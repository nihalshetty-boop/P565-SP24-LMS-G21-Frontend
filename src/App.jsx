// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/firstpage.jsx';
import Login from "./pages/login";
import Signup from "./pages/signup";
import PasswordRecovery from "./pages/passwordrecovery";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<FirstPage/>} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='password-recovery' element={<PasswordRecovery />} />
      </Routes>
  
    
    </BrowserRouter>
  );
}

export default App;
