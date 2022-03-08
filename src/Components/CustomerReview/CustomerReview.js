import React from 'react'
import { Carousel } from 'react-bootstrap'
// import "./Customer.css"

const CustomerReview = () => {
  return (
  <>
     <h1 style={{display:"flex",justifyContent:"center",marginTop:"40px",color:"red"}}> Customer's Testimonial</h1>
     <div className='c'>   
          <Carousel variant="dark"  className='w'>
  <Carousel.Item>
    <img
    style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",padding:"150px"}}
      className="d-block w-100"
      src={require("../../images/client.jpg")}
      alt="First slide"
      />
    <Carousel.Caption >
      <h5>Anna Trevor</h5>
      <p>Dignissimos reprehenderit runt voluptatibus accusantium sapiente nam! Quaerat.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"90%",padding:"150px"}}
      className="d-block w-100"
      src={require("../../images/client.jpg")}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"90%",padding:"150px"}}
      className="d-block w-100"
      src={require("../../images/client.jpg")}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
</div>
</>
  
  )
}

export default CustomerReview