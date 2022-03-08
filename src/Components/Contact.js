import React from 'react'
import Navbar from '../Navbar/navbar'
// import Foter from './Fotter/Foter'
import {Form,Row,Col,Button}from 'react-bootstrap'
import N from './Newarrivals/n'
import NewFooter from './Newfooter/NewFooter'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="inner_page_head bg-warning">
         <div className="container_fuild ">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3 style={{height:"100px",justifyContent:"center",display:"flex",alignItems:"center"}}>Blog List</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className='container mt-4 mb-4 ' style={{border:"2px solid black",borderRadius:"10px",backgroundColor:"#d4ced0"}}>    
        <Form mt-5 mb-5>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>fullname</Form.Label>
      <Form.Control type="fullname" placeholder="Full name" />
    </Form.Group>
</Row>
<Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Enter Yor Email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="address" />
  </Form.Group>
        <Button className='bg-info'>submit</Button>

   
</Form>
</div>
<div className='mt-4 mb-4'>
  <N/>
</div>
      <NewFooter/>
    </>
  )
}

export default Contact