import React from 'react'
import Navbar from '../Navbar/navbar'
// import Foter from './Fotter/Foter'
import N from './Newarrivals/n'
import NewFooter from './Newfooter/NewFooter'
import Whyshopwithus from './WhyShopwithUS/whyshopwithus'

const About = () => {
  return (
      <>
      <Navbar/>
      <section className="inner_page_head" style={{backgroundColor:"#f7444e"}}>
         <div className="container_fuild ">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3 style={{height:"100px",justifyContent:"center",display:"flex",alignItems:"center"}}>About Us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Whyshopwithus/>
      <N/>
      <div className='mt-4 mb-4'>
          <NewFooter/>
      </div>
    </>
  )
}

export default About