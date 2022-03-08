import React from 'react'
import Navbar from '../Navbar/navbar'
import NewFooter from './Newfooter/NewFooter'
import OurProduct from './Ourproduct/ourProduct'

const Product = () => {
  return (
      <>
      <Navbar/>
      <section class="inner_page_head" style={{backgroundColor:"#f7444e"}}>
         <div class="container_fuild ">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h1 style={{height:"100px",justifyContent:"center",display:"flex",alignItems:"center"}}>Our  Product</h1>
                  </div>
               </div>
            </div>
         </div>
      </section>
    <OurProduct/>
    <div className='mt-4 mb-4'>
      <NewFooter/>
    </div>
    </>
  )
}

export default Product