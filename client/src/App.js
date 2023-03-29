import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login'
import Flight from "./pages/Flight";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";
import Booking from './pages/Booking'
import AuthProvider from "./context/Authcontext";
import FlightsProvider from "./context/Flightscontext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FlightsProvider>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path='/bookings' element={<Booking/>} />
            <Route path="/flight" element={<Flight/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
      </Routes>
      </FlightsProvider>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
