import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Home01 from "./pages/Home01";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Help from "./pages/Help";
function App() {
  return (
    <Router>
    <Routes>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/sign-up" element={<SignUp/>}/>
      <Route  path="/reset-password" element={<ResetPassword/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/homme" element={<Home01/>}/>
      <Route  path="/help" element={<Help/>}/>
    </Routes>
    </Router>
  );
}

export default App;
