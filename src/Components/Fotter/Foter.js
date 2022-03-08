import React from 'react'
import { Link } from 'react-router-dom'

const Foter = () => {
  return (
 <>
 <div className='row mx-0 px-0' style={{backgroundColor:"#f8f8f8"}}>
                            <div className='col-3' >
                              <img src= {require("../../images/logo.png") }alt="ss" height="40px" style={{margin:"20px"}}/>
                              <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                              <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                              <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                            </div>
  
  
    <div className='col-3' style={{marginTop:"40px"}}> 
                    <div style={{color:"black",fontWeight:"bold"}}>  Menu</div>  
                      <div className='mt-3' >
                    <div><Link  style={{textDecoration:"none"}} to="/">Home</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">About</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">Service</Link></div>
                    <div><Link style={{textDecoration:"none"}}  to="/">Testimonil</Link></div>
                      <div><Link  style={{textDecoration:"none"}} to="/">Blog</Link></div>
                    <div><Link style={{textDecoration:"none"}}  to="/">Contect</Link></div>
                    </div>
    </div>
   
   <div className='col-3' style={{marginTop:"40px"}}>
       <div style={{color:"black",fontWeight:"bold"}}>  Account </div>  
      <div className='mt-3' >
      
                    <div><Link  style={{textDecoration:"none"}} to="/">Account</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">Checkout</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">Login</Link></div>
                      <div><Link  style={{textDecoration:"none"}} to="/">Register</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">Widget</Link></div>
                    <div><Link  style={{textDecoration:"none"}} to="/">Contect</Link></div>
   </div>
</div>
   
   <div className='col-3'  style={{marginTop:"30px"}}>
   <div style={{color:"black",fontWeight:"bold"}}>SLETTER</div>  
   <p style={{    marginBottom: "1.2rem",
    lineHeight: "25px",
    marginTop:"35px",
    fontSize: "15px"}}>Subscribe by our newslupdate protidin.</p>
   <input type="text" style={{width:"80px"}}  placeholder='email'/><button style={{backgroundColor:"red"}}>Email</button>
   </div>
   <div style={{marginTop:"40px",display:"flex",justifyContent:"center",textAlign:"center",backgroundColor:"black",color:"white",fontSize:"20px"}}>
     <h4 style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:'center'}}><div class="cpy_">
         <p>© 2021 All Rights Reserved By <Link  to="/">Develop by Dhairya</Link></p>
      </div></h4>
      </div>
   </div>
 </>
  )
}

export default Foter