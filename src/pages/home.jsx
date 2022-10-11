import React , {useRef , useEffect} from 'react'
// import { useEffect } from 'react'
import { Navbar ,Footer ,Work, Testimonial } from '../components'
import styled from 'styled-components'
import { M1 ,Reign ,Cycle ,One ,two ,KSM, banner , Giphy  ,Vector} from '../assets'
import { BsArrowRightShort } from "react-icons/bs";
import { gsap } from "gsap";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


const Home = () => {

  const opac = useRef()

  useEffect(() => {
    gsap.to(opac.current, { opacity: "+=0.9" });
    console.log('s')
  });

  const HeroText = styled.h1`
      font-size:100px;
      padding-left:38px;
      padding-right:48px;
     

      span::after {
        content:'' ;
        background:url(${Giphy});
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center center;
        position: absolute;
        width: 256px;
        height: 192px;
        margin-left:-200px;
        margin-top:50px;
        z-index: -1;
      }     

      @media (max-width: 480px){
       
        font-size:50px;
        padding-left:8px;
        padding-right:8px;

      
        span::after {
          content:'' ;
          display:none;
         
        }     
      }

      @media (min-width: 481px) and (max-width:1024px){
        font-size:70px;
        padding-left:18px;
        padding-right:18px;
  
        
        span::after {
          content:'' ;
          // display:none;
          background:url(${Giphy});
          background-repeat:no-repeat;
          background-size:cover;
          background-position:center center;
          position: absolute;
          width: 246px;
          height: 172px;
          margin-left:-200px;
          margin-top:50px;
          z-index: -1;
        }     
      }
  `;

  const Hero = styled.section`
    display:flex;
    align-items:center;
    height:70vh;

    @media (max-width: 480px){
      height:60vh;
    }

    @media (min-width: 481px) and (max-width:1024px){
      padding: +20px;
      height:60vh;
    }

  `;

  const Buttons = styled.div`
      padding-left:38px;
      // padding-right:48px;

      @media (max-width: 480px){
        padding-left:18px;
        margin-top:20px;

      }
      
  `;

  const AboutUS = styled.div`
    @media (min-width: 481px) and (max-width:1024px){
      margin-bottom:100px;
    }
    h2 {
      font-size:40px;
    }
  `;

  const Image =styled.img`
      height:400px;
      z-index:999;
      margin-right:-300px;
      margin-top:150px;

      // @media (min-width: 481px) and (max-width:768px){
      //   height:230px;
      //   z-index:999;
      //   margin-left:10px;
      //   margin-bottom:-350px;
      //   // display
        
  
      // }

      @media (min-width: 481px) and (max-width:1024px){
        height:230px;
        z-index:999;
        margin-left:00px;
        margin-bottom:-350px;
        // display
        
  
      }

      @media 
          (max-device-width: 1204px) 
          and (orientation: landscape)
          and (-webkit-min-device-pixel-ratio: 2) { 
            height:300px;
            z-index:999;
            margin-left:10px;
            margin-bottom:-350px;
            
        }
      
  `;

  const OurServices = styled.div`
      .service-grid{
        display:flex;
        align-items-center'
        justify-content:center;
      }

      h1{
        font-size:40px;
      }
      .num h1 {
        font-size:200px;
      }
  `;

  const Contact = styled.div`
      padding-top:90px;
      padding-bottom:90px;

      span{
        border-radius:50%;
        border:1px solid #FFCC1D;

      }

      @media (max-width:486px){
        padding-top:60px;
        padding-bottom:60px;
  
        span{
          border-radius:50%;
          border:1px solid #FFCC1D;
  
        }
      }
  `;

  const Brands = styled.div`
    .logo{
      display:flex;
      align-items:center;
      justify-content:center;
      // background:red;
      padding:10px
    }
    .logo img{
      height:40px;
    }


    @media (max-width: 480px){
      
    }
  `;

  const Banner = styled.div`
   img{
    height:700px;

    @media (max-width: 10240px){
      height:auto;
    }

   }
  `;

  const Quote = styled.div`
     z-index:1;
     .text-container{
      z-index:-1;
     }
  `;

  const About = styled.div`
        .text-holder{
          margin-left:250px;
         
        }
      
        // img{
        //   background:red;
        //   width: 256px;
        //   height: 192px;
        // }

        @media (max-width: 480px){
          .text-holder{
            margin-left:10px;
           
          }
          // img{
          //   width: 256px;
          //   height: 192px;
          // }
        }
  `;

  return (
    <div className='home'>
      {/* header element */}
      <div className="p-2 mb-5">
        <Navbar/>
      </div>
      <Hero className="hero container px-12 md:px-4">
       <div className="hero-container">
          <p className='font-NeueRegular text-namiri-yellow'>Karibu, We are Namiri Creatives</p>
          <HeroText ref={opac} className='lg:font-kaftan md:font-kaftan font-NeueBold text-white'>
            Creating <span className='text-namiri-yellow font-kaftan'>Timeless</span> <br />
            Brands. 
          </HeroText>
          <Buttons className="cta-btns  w-72 flex items-center justify-between  ">
            <button className='rounded bg-namiri-yellow text-namiri-light font-NeueRegular px-5  py-2'>
              About us 
            </button>
          </Buttons>
        </div>
      </Hero>
      <div className="aboutus m-4">
        <div className="container lg:flex md:flex gap-0 ">
          <div className='lg:w-60 md:w-20'>
          
          </div>
          <Image src={M1} alt="" ></Image>
          <AboutUS className='w-full'>
            <div className="lg:grid md:grid grid-cols-2 gap-6 bg-gray-100 lg:p-14  md:p-6  p-6">
                <div className="abt-head">
                  <h5 className='font-NeueRegular'>Who are we ?</h5>
                  <h2 className='font-NeueBold text-namiri-light'>About Us</h2>
                  <hr />
                </div>
                <div className="abt text">
                  <p className="font-NeueRegular">
                  Namiri Creatives is a digital design agency, that houses brands, businesses, and Organisations. We help them grow, increase their revenues, expand brand awareness and connect with happy customers as well as earn happy customers too.

We specialize in creating effective strategies and powerful identities , seamless interactions, and memorable customer experiences to connect brands to their customers.
                  </p>
                </div>
            </div>
          </AboutUS>
        </div>
      </div>
      {/* sliders */}

      <OurServices className=' container lg:m-10 m-4 lg:px-16 lg:py-4 px-4 py-2  '>
        <h1 className='font-kaftan text-white py-10'>Our Services. </h1>
        <div className="service-grids flex items-center justify-center ">
          <div className="lg:grid md:grid  grid-cols-4 gap-2">

            <div className="ser-1 lg:border-r md:border-r border-gray-500 ">

              <div className="ser-tt p-6 md:p-3  p-2">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Web Design <br /> & Development
                </h2>
                <span className="font-NeueRegular text-namiri-sun">
                  Digital Design
                </span>
              </div>
              <div className="num">
                <h1 className='font-kaftan text-namiri-sun  text-center'>
                  1
                </h1>
              </div>

            </div>
            <div className="ser-2 lg:border-r md:border-r border-gray-500">
              
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-xl'>Branding <br /> & Identity Strategies 
                </h2>
                <span className="font-NeueRegular text-namiri-sun">
                  Digital Design & Branding
                </span>
              </div>
              <div className="num">
                <h1 className='font-kaftan text-namiri-sun  text-center'>
                  2
                </h1>
              </div>

            </div>
            <div className="ser-3 lg:border-r md:border-r border-gray-500">
              
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Graphic <br /> & Design
                </h2>
                <span className="font-NeueRegular text-namiri-sun">
                  Digital Design
                </span>
              </div>
              <div className="num">
                <h1 className='font-kaftan text-namiri-sun  text-center'>
                  3
                </h1>
              </div>

            </div>
            <div className="ser-4 ">
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Digital <br /> & Marketing.
                </h2>
                <span className="font-NeueRegular text-namiri-sun">
                  Digital Marketing
                </span>
              </div>
              <div className="num">
                <h1 className='font-kaftan text-namiri-sun  text-center'>
                 4
                </h1>
              </div>
            </div>

          </div>
        </div>
      </OurServices>
      {/* big ass quote */}
      <Quote className="mt-12 p-0 z-20 ">
            <div className="brank p-">

            </div>
            <div className="text-container  lg:py-10 lg:px-10 p-5 lg:w-3/5 md:w-4/5 bg-gray-100">
              <h1 className="font-NeueBold  lg:text-4xl text-3xl text-start p-6">
              <span className="text-namiri-dark font-kaftan"> ''</span> Creativity is not the finding of a thing, but the making something out of it after it is found.
              <span className="text-namiri-dark font-kaftan">"</span>
              </h1>
              <div className="text-end">
                <span className='font-NeueRegular text-white '>
                    James Russell Lowell 
                </span>
              </div>
            </div>
            
      </Quote>
      <About className='-z-20'>
            {/* <div className="empty-lines p-6  bg-namiri-dark  ">
            </div> */}
          <div className="text-holder lg:py-8 lg:px-12 lg:p-10 md:p-8 p-4 lg:flex items-center justify-center bg-namiri-dark">
            <div className="more-about">
              <p className="text-white font-NeueRegular lg:w-4/5 lg:text-3xl text-xl text-xl md:py-5 py-4">
                <span className='text-namiri-yellow'>Why Namiri ? -</span> We strive to make your brand create a lasting impression on both your existing and potential client base. 
               
                Intrested in finding new ways of doing things , creating brands that rise beyond the typical crowd , promising change and transformation.
                
                We are as good as the best , a one man studio but definetly not a one man show.
              </p>
            </div>
            <div className="image-svg-logo">
              {/* <img src={Vector} class="img-fluid rounded-top" alt=""></img> */}
            </div>
          </div>
      </About>
      <Work/>
      <Testimonial/>
      <hr align="center" className='w-5/6 text-white'   />
      <Brands className='container lg:p-10 md:p-8 p-6'>
        <h3 className='text-white font-NeueBold lg:text-5xl md:text-4xl text-3xl'>Home of <span className='text-namiri-yellow font-kaftan '>Iconic </span> Brands .: </h3>
        <p className='text-namiri-yellow font-NeueRegular text-xl'>Proud of working with .</p>
        <div className="logos py-10">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-4">

            <div className="logo ">
              <img src={Reign} alt="" />
            </div>
            <div className="logo ">
              <img src={Cycle} alt="" />
            </div>
            <div className="logo ">
              <img src={One} alt="" />
            </div>
            <div className="logo ">
              <img src={two} alt="" />
            </div>
            <div className="logo ">
              <img src={KSM} alt="" />
            </div>
          </div>
          <hr className='text-white'/>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-4 hidden lg:grid">
              <div className="logo ">
                <img src={Reign} alt="" />
              </div>
              <div className="logo ">
                <img src={Cycle} alt="" />
              </div>
              <div className="logo ">
                <img src={One} alt="" />
              </div>
              <div className="logo ">
                <img src={two} alt="" />
              </div>
              <div className="logo ">
                <img src={KSM} alt="" />
              </div>
          </div>
        </div>

      </Brands>
      <Banner className="wall-img container px-10 py-10 flex justify-center">
        <img src={banner} alt=""  />
      </Banner>
      <hr className='w-5/6 text-white' align="center" />
      <Contact className='p-9'>
    
        <p className="text-center font-NeueRegular text-white text-2xl">
          Contact 
        </p>
        <h1 className='text-center font-NeueBold text-white lg:text-5xl  text-4xl py-4'>
          NAMIRI <br /> IMMEDIATELY.
        </h1>
        <div className="icon p-4 flex items-center justify-center">
          <span className='text-center text-namiri-yellow text-6xl '>
            <BsArrowRightShort/>
          </span>
        </div>
      
      </Contact>
      <hr className='w-5/6 text-white' align="center" />
      <div className="p-4">

      </div>
      <Footer/>
    </div>
  )

}

export default Home