import React from 'react';
import './App.css';
// import Navbar from './Navbar/navbar';
import Product from './Components/product';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Cart from './Components/Cart';


function App() {
  return (
  <>
<div>
<Router>
  <Routes> 
           <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="Testimonial" element={<Testimonial />} />
            <Route path="Cart" element={<Cart />} />
      </Routes>

      </Router>

      {/* <Navbar/> */}
</div>

   </>
  );
}

export default App;
