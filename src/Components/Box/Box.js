import React from 'react'
// import { Form } from 'react-bootstrap'
import  './Box.css'

const Box = () => {
  return (
    <div style={{backgroundColor:"#d4ced0",marginTop:"60px",textAlign:"center",height:"350px"}}>
        <h1 className='h'>Subscribe To Get Discount Offers</h1>
        <p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
       
    <input type="Email" placeholder='Enter Your Email' className='input'/><div></div>
        
        <button className='btn1'>SubScribe</button>
    </div>
  )
}

export default Box