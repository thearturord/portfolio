import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Apps from './pages/Apps.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="apps" element={<Apps />}/>          
        </Route>  
        <Route path="*" element={<Home />}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
