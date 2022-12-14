import React from 'react'
import { Navbar ,Footer, Work } from '../components'
import styled from 'styled-components'
import { BsArrowRightShort ,BsArrowLeftShort } from "react-icons/bs";
// import { FraciahLaw, Iyebe, ReignD } from '../assets';
import { Link } from 'react-router-dom';

const Ourwork = () => {

  

      const Nav = styled.div`
          span.arrow{
            border-radius:50%;
            border:1px solid #FFCC1D;
          }
      `;

      const Heading = styled.h1`
          font-size:230px;
          line-height:200px;

          @media (max-width: 480px){
            font-size:70px;
            line-height:70px;
          }

          @media (min-width: 481px) and (max-width:768px){
            font-size:120px;
            line-height:110px;
          }
      `;


  return (
    <>
        <div className="p-2 mb-5">
            <Navbar/>
        </div>
        <div className="container px-6 py-4">
          <Heading className="text-center  font-NeueBold text-white">
            <span className='font-kaftan italic'>Our</span> <br /> WORK  <span className='text-namiri-yellow'>.</span>
          </Heading>
        </div>
        <div className="some-text px-4 py-6 m-4 lg:grid md:grid grid-cols-2 gap-4 container">
            <div className="blank lg:p-4">

            </div>
            {/* <div className="blank p-4">

            </div> */}
            <div className="some-text">
                <p className="font-NeueRegular text-white w-5/5  ">
                    We've helped many brands grow and reach greater heights in branding , brand exprience and visual identity.Small Businesess to larger Enterprises,Creatives Growing Brands.We prefer to let our work speak for itself. Check yourself.
                </p>
            </div>
        </div>
        {/*  */}
            <Work/>
        {/*  */}
        <div className="random-large-text container px-2 py-10">
            <h1 className='font-NeueBold lg:text-8xl md:text-7xl text-4xl text-white text-start lg:w-5/6 md:5/6 w-6/6'>
            A ONE-MAN STUDIO, BUT CERTAINLY NOT A ONE-MAN SHOW. 
            </h1>
        </div>
        <hr className=' text-white p-4' align="center" />
        <Nav className='p-9 container'>
            <div className="grid grid-cols-2 gap-0">
              <div className="link1 p-5 flex justify-center">
                   <div className="link-container">
                    <h5 className="font-NeueRegular p-2 text-white text-center">
                        Previous
                      </h5>
                      <h2 className="name-link font-Adieu text-white text-center lg:text-6xl">
                         More<br />About Us
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                          <span className='arrow text-namiri-yellow lg:text-6xl  text-5xl '>
                          <Link to="/about-us">
                              <BsArrowLeftShort />
                          </Link>    
                          </span>
                      </div>
                   </div>
              </div>
            
              <div className="link2 p-5 flex justify-center">
                   <div className="link-container">
                    <h5 className="font-NeueRegular p-2 text-white text-center">
                        Next
                      </h5>
                      <h2 className="name-link font-Adieu text-white text-center lg:text-6xl">
                        Our <br />
                        Method
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                          <span className='arrow text-namiri-yellow lg:text-6xl text-4xl '>
                          <Link to="/our-method">
                             <BsArrowRightShort/>
                          </Link>    
                          </span>
                      </div>
                   </div>
              </div>
              
            </div>
           
  
        </Nav>
        
        <div className="p-4">

        </div>

        
        <Footer/>
    </>
  )
}

export default Ourwork