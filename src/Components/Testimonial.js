import React from 'react'
import Navbar from '../Navbar/navbar'
import CustomerReview from './CustomerReview/CustomerReview'
// import Foter from './Fotter/Foter'
import NewFooter from './Newfooter/NewFooter'

const Testimonial = () => {
  return (
      <>
      <Navbar/>
      <section class="inner_page_head" style={{backgroundColor:"#f7444e"}}>
         <div class="container_fuild ">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3 style={{height:"100px",justifyContent:"center",display:"flex",alignItems:"center"}}>Testimonial</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <CustomerReview/>
      <div className='mt-4 mb-4'>
        <NewFooter/>

      </div>
    </>
  )
}

export default Testimonial