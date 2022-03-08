import React from "react";
import Navbar from "../Navbar/navbar";
import Box from "./Box/Box";
import CustomerReview from "./CustomerReview/CustomerReview";
import OurProduct from "./Ourproduct/ourProduct";
import Whyshopwithus from "./WhyShopwithUS/whyshopwithus";
import N from "./Newarrivals/n";
import "./home.css";
import Foter from "./Fotter/Foter";
import Main from "./Main/Main";
// import NewCustoomerReview from "./CustomerReview/NewCustoomerReview";
function Home() {
  return (
    <>
       <Navbar />
      <Main />
      <Whyshopwithus />
      <N />
      <OurProduct />
      <Box />
      <CustomerReview />
      <Foter /> 
    
      {/* <CustomerReview /> */}
    </>
  );
}

export default Home;
