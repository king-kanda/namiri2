import React from 'react'
import styled from 'styled-components'
import { IMG1, IMG2 , PLAYG } from '../assets';
import { Navbar, Footer ,Testimonial } from '../components'


const Aboutus = () => {

    const HeroText = styled.h1`
      font-size:100px;
      padding-left:38px;
      padding-right:48px;
      
      @media (max-width: 480px){
        font-size:50px;
        padding-left:18px;
        padding-right:8px;
        }

        @media (min-width: 481px) and (max-width:1024px){
            font-size:70px;
            padding-left:38px;
            padding-right:48px;
          }
  `;

  const Hero = styled.section`

    display:flex;
    align-items:center;
    // height:70vh;

    @media (max-width: 480px){
    //   height:40vh;
    }

    @media (min-width: 481px) and (max-width:768px){
      height:40vh;
    }

  `;

 
    const Gallery = styled.div`
        img#1{
            width:80%;
            height:auto;
        }
        img#2{
            height:80%;
            width:auto;
        }
    `;

    const Abt = styled.div`
        .img-abt{
            height:75vh;
            margin-left:50px;
            margin-bottom:-200px;
            z-index:999;
        }
        .div-blank{
          height:200px;
        }
        
        @media (max-width: 480px){
            .img-abt{
                height:300px;
                margin-left:20px;
                margin-bottom:-200px;
                z-index:999;
            }
             h1{
                font-size:35px;
                font-weight:bold;
             }
            }

            @media (min-width: 481px) and (max-width:1024px){
                .img-abt{
                    
                    height:520px;
                    margin-left:50px;
                    margin-bottom:-200px;
                    z-index:999;
                }
               
            }
       
    `;

    const Serve = styled.div`
            .digi-xp , .br-id , .br-xp {
                ul li {
                    font-size:16px;
                }
            }
            @media (min-width: 481px) and (max-width:768px){
                .digi-xp , .br-id , .br-xp {
                    ul li {
                        font-size:20px;  
                    }
                }
            }

            @media (max-width: 480px){
                .digi-xp , .br-id , .br-xp {
                    ul li {
                        font-size:20px;  
                        
                    }
                }
            }
    `;

  return (
    <div>
       <div className="p-2 mb-5">
        <Navbar/>
      </div>
      <div className="main-body">
      <Hero className="hero container lg:px-12 p-6">
            <div className="hero-container">
                <p className='font-NeueRegular text-namiri-yellow'> Idea driven power house</p>
                <HeroText className='font-kaftan text-white'>
                Home of  <span className='text-namiri-yellow'> Iconic </span> <br />
                Brands.
                </HeroText>
            </div>    
      </Hero>
        <div className="ico-abt p-8 m-4">
            <div className="container lg:grid  grid-cols-2 gap-6">
                <div className="blank">

                </div>
                <div className="ico-txt">
                    <p className="font-NeueLight text-2xl text-white w-5/5 ">
                    Housing brands, businesses, and Organisations ,helping them grow, increase their revenues, expand brand awareness and connect with happy customers as well as earn happy customers too.
                    </p>
                </div>
            </div>
        </div>
        <Abt className="abt-intro container lg:px-7 lg:py-4 md:p-2">
            <div className="abt-img">
                <img src={PLAYG} alt="" className='img-abt' />
            </div>
            <div className="div-blank bg-gray-700 p-10"></div>
            <div className="abt-text lg:grid md:grid grid-cols-2 gap-4 bg-gray-700 lg:p-12 p-6  bottom-0">
                <div className="abt-tt">
                    <h1 className="font-NeueRegular lg:text-5xl md:text-5xl font-bold md:py-5">
                      Helping brands connect <br /> to their customers.
                    </h1>
                </div>
                <div className="abt-txt lg:w-5/6 w-5/5 md:text-2xl text-xl">
                    <p>
                    Namiri Creatives is a digital design agency, that houses brands, businesses, and Organisations. We help them grow, increase their revenues, expand brand awareness and connect with happy customers as well as earn happy customers too.
                    </p>
                    <br />
                    <p>
                    Despite our modest stature, we are able to accomplish great things. We encourage businesses and organizations to understand the power of branding and use it to their advantage in order to expand.
                    </p>
                </div>
            </div>
        </Abt>
        <Gallery className="img-gll container">
            <div className="lg:px-6 lg:py-4 p-4 lg:m-6  m3">
               <div className="img-grid lg:flex md:flex items-center justify-between md:justify-around">
                    <div className="img-1 lg:px-4">
                        <img src={IMG2} alt="" id='1' />
                    </div>
                    <div className="img-2 lg:px-4 mt-10 lg:mt-0 md:mt-0">
                        <img src={IMG1} alt="" id='2' />
                    </div>
               </div>
            </div>
        </Gallery>
        <div className="random-large-text container p-3">
            <h1 className='font-NeueBold lg:text-8xl md:text-6xl text-5xl text-white text-start lg:4/5 md:w-5/5 '>
               GROWING AND CONNECTING BRANDS TO THEIR CUSTOMERS.
            </h1>
        </div>
       <Serve className='contaner lg:px-6 lg:py-4 p-3 m-4 lg:grid  grid-cols-2 gap-4'>
        <div className="main-tt lg:px-6">
            <h2 className='font-NeueBold text-3xl text-namiri-yellow lg:p-0 md:p-3 py-6 text-start '>
                Our Services
            </h2>
        </div>
        <div className="ser-coont">
            <h2 className='font-NeueBold text-3xl text-white' >
                What we deliver.
            </h2>
            <p className='font-NeueRegular text-white lg:w-4/5 py-4'>
            We create specialize in creating effective and powerful strategies and timeless brands and identities while creating seamless interactions and memorable experiences to create relationships between businesses and people.
            </p>
            <div className="lg:grid md:grid grid-cols-3 gap-4">
                <div className="digi-xp px-6 py-2">
                    <h4 className="underline text-white font-NeueRegular lg:py-2 ">
                        Digital Expirience
                    </h4>
                    <ul className='font-NeueRegular text-gray-100'>
                        <li>Web Design</li>
                        <li>Web Development</li>
                    </ul>
                </div>
                <div className="br-id px-6 py-2">
                <h4 className="underline text-white font-NeueRegular py-2 ">
                        Branding
                    </h4>
                    <ul className='font-NeueRegular text-gray-100'>
                        <li>Brand Identity</li>
                        <li>Visual Identity</li>
                        <li>Logos</li>
                        <li>Stationery</li>
                    </ul>
                </div>
                <div className="br-xp px-6 py-2 ">
                <h4 className="underline text-white font-NeueRegular py-2 ">
                        Brand Expirience
                    </h4>
                    <ul className='font-NeueRegular text-gray-100'>
                        <li>Copy Writing </li>
                        <li>Social Media Managment</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
       </Serve>
       <Testimonial/>
       </div>
       <div className="p-4 m-4">
       </div>      
      <Footer/>
    </div>
  )
}

export default Aboutus