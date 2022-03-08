import React from 'react'
import Navbar from '../Navbar/navbar'
import NewFooter from './Newfooter/NewFooter'
import Whyshopwithus from './WhyShopwithUS/whyshopwithus'
// import NewFoter from './NewFotter/NewFoter'
// import NewFooter from './Newfooter/NewFooter'

const Blog = () => {
  return (
      <>
      <Navbar/>
    {/* <div style={{backgroundColor:"red"}}>
        Blog
        </div> */}
        <section className="inner_page_head bg-warning">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3 style={{height:"100px",justifyContent:"center",display:"flex",alignItems:"center"}}>Blog List</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Whyshopwithus/>
    <NewFooter/>
    </>
  )
}

export default Blog