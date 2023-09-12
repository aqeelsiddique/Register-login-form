
import React from 'react';
import  { Route , Routes} from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import pageerror from './Components/pageerror';
 const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      
        
        
    

      </Routes>
      
    
      
    </div>
  );
}
export default App;
