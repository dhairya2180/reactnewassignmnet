import React from "react";
// import Product from "../product";
// import { CardGroup, Card } from "react-bootstrap";
import "./Ourproduct.css";

const ourProduct = () => {
  const product = [
    {
      title: "Men's Shirt",
      image: require("../../images/p1.png"),
      price: "$80",
      id: 1,
    },
    {
      title: "Men's Shirt ",
      image: require("../../images/p2.png"),
      price: "$75",
      id: 2,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p3.png"),
      price: "$82",
      id: 3,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p4.png"),
      price: "$68",
      id: 4,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p5.png"),
      price: "$70",
      id: 5,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p6.png"),
      price: "$75",
      id: 6,
    },
    {
      title: "Men's Shirt",
      image: require("../../images/p7.png"),
      price: "$39",
      id: 7,
    },
    {
      title: "Men's Shirt",
      image: require("../../images/p8.png"),
      price: "$95",
      id: 8,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p9.png"),
      price: "$65",
      id: 9,
    },
    {
      title: "Women's Dress",
      image: require("../../images/p10.png"),
      price: "$75",
      id: 10,
    },
    {
      title: "Men's Shirt1",
      image: require("../../images/p11.png"),
      price: "$78",
      id: 11,
    },
    {
      title: "Men's Shirt",
      image: require("../../images/p12.png"),
      price: "$65",
      id: 12,
    },
  ];
 

  return (
    <>
      <h1 className="c">Our Product</h1>

      {product.map((item) => {
        return (
          <div className="c1" key={item.id}>
            <div>
              {" "}
              <img
                src={item.image}
                height="450px"
                width="400px"
                className="c3"
                alt="ietmimages"
              />
            </div>
            <div className="c4">
              {item.title}
              <div></div>
              <p style={{ marginRight: "30px" }}>{item.price}</p>
            </div>
            <button className="c5" onClick={()=>{showid(item.id,item.title,item.image,item.price)}} > Add Cart</button>
  
          </div>
        );
      })}
    </>
  );
};
export var items=[]
const showid=(id,t,img,p)=>{
 items.push({"id":id,"name":t,"image":img,"price":p})
console.log(items)
 // {
//   items.map((c1)=>{
//     return (
//     <h1>mynmaeis {c1.id}</h1>
      
//   )})
 
// }
// )
}

export default ourProduct;

