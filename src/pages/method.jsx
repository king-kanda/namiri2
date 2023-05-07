import React from 'react'
import styled from 'styled-components'
import { BsArrowRightShort } from "react-icons/bs";
import { Navbar , Footer  } from '../components'
import { CodeGirl, Mockup, Note, WireFrame, wmock } from '../assets';

const Method  = () => {

    const HeroText = styled.h1`
    font-size:100px;
    padding-left:38px;
    padding-right:48px;

    @media (max-width: 480px){
        font-size:50px;
        padding-left:18px;
        padding-right:18px;
    }

    @media (min-width: 481px) and (max-width:768px){
        font-size:70px;
        padding-left:18px;
        padding-right:18px;
    }
        
    `;

    const Hero = styled.section`
        display:flex;
        align-items:center;
        height:70vh;

        @media (max-width: 480px){
        height:50vh;
        }

        @media (min-width: 481px) and (max-width:768px){
        height:40vh;
        }

    `;


    const Contact = styled.div`
    padding-top:90px;
    padding-bottom:90px;
  
   
  `;

  const Strategy = styled.div`
    
    padding:50px;

    .notes-img{
        width:1000px;
        height:auto;
    }
  `;

    const Listen = styled.div`
        .code-g{
            height:700px;
            width:auto;
        }
        img{
            height:100%;
            width:100%;
        }
    `;

  return (
    <div>
         <div className="p-2 mb-5">
            <Navbar/>
         </div>
        <Hero className="hero container px-12">
            <div className="hero-container">
                <p className='font-NeueRegular text-namiri-yellow'> Idea driven power house</p>
                <HeroText className='font-NeueBold text-white'>
                    <span className='text-namiri-yellow font-kaftan'> Quality </span> Service & <br />
                    A lil’ Fun .
                </HeroText>
            </div>
            
        </Hero>

        <div className="bt-side-txt container lg:p-6 p-3 mb-4">
            <div className="px-5 py-3 lg:grid md:grid grid-cols-2 gap-2">
                <div className="blank">
                    <h3 className="font-NeueBold text-3xl text-namiri-yellow">
                        Our Method
                    </h3>
                </div>
                <div className="bst-txt">
                <p className='font-NeueRegular text-white text-xl '>
                Straight to the point, with no pompous or sweet talk. We form close relationships with our customers through empathy and interest. We collaborate to create your brand's vision, mission, and values based on strategy. This is translated into a distinct and well-thought-out visual identity, which we make visible and tangible through a website, video, social media, trade show, or whatever. We design everything for the best brand experience. From advice to execution, we make an effort to learn about your business and become a part of it.
                </p>
                </div>
            </div>
        </div>
        <div className="p-4">

        </div>
        <div className="hr-tt p-6">
            <h3 className="font-NeueBold text-center text-white text-3xl">
                Pillars of Practice.
            </h3>
        </div>
        <Strategy className="strategy  lg:mb-3 mb-1 container">
            <div className="lg:flex md:flex items-center justify-center">
                <div className="img">
                    <img src={Note} alt="" className='notes-img' />
                </div>
                <div className="s-txt lg:p-10 p-3">
                    <h2 className="font-NeueBold text-namiri-yellow text-2xl">
                        Strategy <span className='text-white '>equals</span> success.
                    </h2>
                    <p className="font-NeueRegular text-white text-xl lg:w-4/5 lg:py-5 p-2 w-5/5">
                    we're committed to developing the best action plan for your brand's growth. Our ambition is to see small to large-scale businesses, freelancers, and non-governmental organizations thrive.
                    </p>
                </div>
            </div>
        </Strategy>

        <Listen className='lg:p-12 mb-2 lg:grid md:grid grid-cols-2 gap-2 container'>
            <div className="lst-img">
                <div className="mock">
                    <img src={Mockup} alt="" className='mock' />
                </div>
                <div className="mock-txt py-12 px-10">
                    <h3 className='font-NeueBold text-white text-3xl '>
                        We <span className="text-namiri-yellow">Listen</span>
                    </h3>
                    <p className="font-NeueRegular text-white text-xl py-12">
                    We listen and pay attention to our clients, we ask questions and establish what needs to be done and we give it our best to solve the challenge presented to us.
                    </p>
                </div>
            </div>
            <div className="c-g p-3">
                <img src={CodeGirl} alt="code-girl" className='code-g' />
            </div>
        </Listen>

        <div className="gallery-2 container">
            <div className="lg:grid md:grid grid-cols-2 gap-6 p-6">
                <div className="img-1">
                    <img src={WireFrame} alt="" />
                     <div className="text-img">
                     <p className="font-NeueRegular text-white text-xl lg:px-6 lg:py-12 p-6">
                    Our ambition is to see the growth of StarUps and Travel Agencies grow , not forgetting all scales of Businesses. We work in the context of development, building trust and relationships as the days pass. We are devoting time and resources to developing the best action plan for your brand's growth.
                    </p>
                    </div>
                </div>
               
                <div className="img-2">
                    <img src={wmock} alt="" className='mt-12' />
                </div>
            </div>
        </div>
        
        
            <hr className='w-5/6 text-white' align="center" />
            <Contact className='p-9'>
                
                <p className="text-center font-NeueRegular text-white text-2xl">
                Contact 
                </p>
                <h1 className='text-center font-NeueBold text-white text-5xl py-4'>
                NAMIRI <br /> IMMEDIATELY.
                </h1>
                <div className="icon p-4 flex items-center justify-center">
                <span className='text-center border rounded-full text-namiri-yellow text-6xl '>
                    <BsArrowRightShort/>
                </span>
                </div>
    
            </Contact>
            <hr className='w-5/6 text-white' align="end" />
            <div className="p-4">

            </div>
         <Footer/>
    </div>
  )
}

export default Method 