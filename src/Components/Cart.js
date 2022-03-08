import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar } from 'react-bootstrap'
import Navbar from "../Navbar/navbar";
import {   items } from "./Ourproduct/ourProduct";
const Cart = (porps) => {
  console.log(items);
  const[data,newdata]=useState(0);
  // var delteproduct = [];

  const deltebtn = (index,p, id, img, n) => {
    // Remove.(deltebtn)
    
  
  items.splice(index,1)
  newdata(data+1)

  };

  return (
    <>
      <Navbar />
      <section
        className="inner_page_head"
        style={{ backgroundColor: "#f7444e" }}
      >
        <div className="container_fuild ">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3
                  style={{
                    height: "100px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Cart product Is
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* / <div></div> */}

      {
      items === "" ? (
        <div className="ss">
          <h1>Plese Add  Items!!</h1>
          <button>
            <Link to="/product">GO to add feature branch Product</Link>
          </button>
        </div>
      ) : (
        items.map((all,index) => {
          return (
            <>
              <div className="c1" key={all.id}>
                <div>
                  <img
                    src={all.image}
                    height="450px"
                    width="400px"
                    className="c3"
                    alt="ietmimages"
                  />
                </div>
                <div className="c4">
                  {all.name}
                  <div></div>
                  <p style={{ marginRight: "30px" }}>{all.price}</p>
                </div>
                <div>
                  <button className="c5"
                    onClick={() => {
                      deltebtn(index,all.id, all.image, all.price, all.name);
                    }}
                  >
                      Delete 
                  </button>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Cart;
