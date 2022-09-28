import React from 'react'
import { Navbar , Footer } from '../components'
import styled from 'styled-components';
import { Callme } from '../assets';
import { BsArrowRightShort } from "react-icons/bs";
// import { gsap } from "gsap";


const Contact = () => {

    const Hero = styled.h1`
     
      span::after {
        content:'' ;
        background:url(${Callme});
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center center;
        position: absolute;
        width: 250px;
        height: 192px;
        margin-left:-200px;
        margin-top:50px;
        z-index: -1;
      }     

      @media (max-width: 480px){
        span::after {
            content:'' ;
            background:url(${Callme});
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center center;
            position: absolute;
            width: 150px;
            height: 92px;
            margin-left:70px;
            margin-top:50px;
            z-index: -1;
          }     
      }

      @media (min-width: 481px) and (max-width:768px){
        span::after {
            content:'' ;
            background:url(${Callme});
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center center;
            position: absolute;
            width: 150px;
            height: 92px;
            margin-left:70px;
            margin-top:50px;
            z-index: -1;
          }    
      }
  `;

        const Method = styled.div`
            padding-top:90px;
            padding-bottom:90px;
        
            span{
            border-radius:50%;
            border:1px solid #FFCC1D;
            }
        `;

  return (
    <div className='contact-us'>
        <div className="p-2 mb-5">
            <Navbar/>
        </div>
        <Hero className="container px-4 mb-4">
           <div className="hero-container">
                <div className="random-large-text container p-2">
                    <h1 className='font-NeueBold lg:text-8xl  text-5xl text-white text-start lg:w-5/6'>
                        WE'D LOVE TO <span className='text-namiri-yellow' >HEAR</span> FROM YOU . <br />  Hi THERE !
                    </h1>
                </div>
           </div>
        </Hero>
        <div className="some-text px-4 py-6 m-4 lg:grid  lg:grid-cols-3 gap-4 container">
            <div className="blank p-4">

            </div>
            <div className="blank p-4">

            </div>
            <div className="some-text">
                <p className="font-NeueRegular text-white  ">
                Are you a creative talent or do you have a great idea? We are always looking for fun collaborations and cool projects. Just walk in or contact us via the options below. It can't hurt to have a cup of coffee.
                </p>
            </div>
        </div>
        <div className="blank p-4">

        </div>
        <div className="container px-4 mb-4 lg:w-5/6 md:w-5/6 w-6/6">
            <hr className="text-white" />
            <div className="phone  py-10 text-white flex">
                <span className='pxw font-NeueRegular text-gray-700' >Phone</span>
                <h2 className="font-kaftan lg:text-7xl text-4xl px-12 text-start hover:text-namiri-yellow">
                    0774497927
                </h2>
            </div>
            <hr className="text-white" />
            <div className="mail py-12 text-white flex">
                <span className='pxw font-NeueRegular text-gray-700' >Email</span>
                <h2 className="font-kaftan lg:text-7xl text-2xl px-12 text-start hover:text-namiri-yellow">
                    hello@namiricreatives.com
                </h2>
            </div>
            <hr className="text-white" />
            <div className="behance  py-12 text-white ">
                <div className="flex">
                    <span className='pxw font-NeueRegular text-gray-700' >Socials</span>
                    <div className="socials">
                        <h2 className="font-kaftan lg:text-7xl text-4xl px-12 pb-4 text-start hover:text-namiri-yellow">
                            Behance.
                        </h2>
                        <h2 className="font-kaftan lg:text-7xl text-4xl px-12 py-4  text-start hover:text-namiri-yellow">
                        Twitter.
                        </h2>
                        <h2 className="font-kaftan lg:text-7xl text-4xl px-12 py-4  text-start hover:text-namiri-yellow">
                        LinkedIn.
                        </h2>
                        <h2 className="font-kaftan lg:text-7xl text-4xl px-12 py-4  text-start hover:text-namiri-yellow">
                        Instagram.
                        </h2>

                    </div>
                </div>
              
            </div>
           
            <hr className="text-white" />
            <Method className='p-9'>
                <p className="text-center font-NeueRegular text-white text-2xl">
                How we do it ? 
                </p>
                <h1 className='text-center font-NeueBold text-white lg:text-5xl md:text-5xl text-3xl py-4'>
                HOW DO WE MAKE <br />
                YOU GROW
                </h1>
                <div className="icon p-4 flex items-center justify-center">
                <span className='text-center text-namiri-yellow text-6xl '>
                    <BsArrowRightShort/>
                </span>
                </div>
            </Method>
        </div>


        <Footer/>
    </div>
  )
}

export default Contact