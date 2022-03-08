import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Customer.css"

const NewCustoomerReview = () => {
  return (
      <>
      <h1>hlwww</h1>
    {/* <div className='container bg-info d-flex justify-content-center'> */}
       <div className='w'> 
       {/* <div>       <h1>Customer Review</h1> */}
        {/* </div>  */}
        

    <Carousel >
  <Carousel.Item className='s'>
       <img
      className='img'
      src= {require("../../images/client.jpg")}
      alt="First slide"
    />
    <h3>sff</h3>
    <p>ssssfdvdvdvdvvdddvdvdvdvdvdvdvdvvvd</p>
    </Carousel.Item>
    </Carousel>
    {/* <Carousel.Caption className='ss'>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  
 
  </div>
 
  {/* <Carousel.Item>
    <img
      className="d-block  w-100"
      src={require("../../images/client.jpg")}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  w-100"
      src={require("../../images/client.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
{/* </Carousel> */}

    {/* </div> */}
    </>
  )
}

export default NewCustoomerReview