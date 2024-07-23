import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Thankyou from "./components/Thankyou";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/services' element={<div className="mx-5">
              <Services />
            </div>} />
          <Route path='/contact' element={<div className="mx-5">
              <Contact />
            </div>} />
          <Route path='/about' element={
            <div className="mx-5">
              <About />
            </div>
          } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
