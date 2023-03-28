import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login'
import Flight from "./pages/Flight";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/flight" element={<Flight/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
