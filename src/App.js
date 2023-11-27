// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/register.js';
import Login from './component/login.js';

import HomePage from './Homepage/home.js';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />  
          
      <Route exact path='/' element={<Login/>}/>
      
      
       
      
        </Routes>
    </Router>
    </div>
  );
}

export default App;
