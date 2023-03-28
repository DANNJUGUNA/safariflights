import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login'
import Aboutus from "./pages/Aboutus";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/aboutus" element={<Aboutus/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
