import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login'
import Flight from "./pages/Flight";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";
import Booking from './pages/Booking'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<Home/>} />
          <Route path="/" element={<Layout/>}>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path='booking' element={<Booking/>} />
            <Route path="/flight" element={<Flight/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
