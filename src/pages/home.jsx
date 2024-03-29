import React , {useRef , useEffect} from 'react'
import { Navbar ,Footer ,Work, Testimonial , Blogs , Brands} from '../components'
import styled from 'styled-components'
import { M1  } from '../assets'
import { BsArrowRightShort } from "react-icons/bs";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


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
    

      @media (max-width: 480px){
       
        font-size:50px;
        padding-left:8px;
        padding-right:8px;

      }

      @media (min-width: 481px) and (max-width:1024px){
        font-size:70px;
        padding-left:18px;
        padding-right:18px;
    
      }
  `;

  const Hero = styled.section`
    display:flex;
    align-items:center;
    height:80vh;

    P{
      font-size:15px;
    }

    @media (max-width: 480px){
      height:60vh;
    }

    @media (min-width: 481px) and (max-width:1024px){
      padding: +20px;
      height:60vh;
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
      margin-right:-400px;
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
        align-items:center;
        justify-content:center;
      }

      
      .ser-title{
        font-size:40px;
      }
      .num h2 {
        font-size:150px;
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

  const Title = styled.div`
      p{
        font-size:200px;

        @media (max-width: 480px){
          font-size:85px;
        }
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
          <HeroText ref={opac} className='font-kaftan  text-white'>
            Creating  <span className='text-namiri-yellow font-kaftan'>Timeless</span> <br />
            Brands. 
          </HeroText>
          
        </div>
      </Hero>
      <div className="aboutus m-4">
        <div className="container lg:flex md:flex gap-0 ">
          <div className='lg:w-10 md:w-10'>
          
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
                  <p className="font-NeueRegular text-xl">
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
        <p className='font-kaftan text-white py-10 ser-title'>Our Services. </p>
        <div className="service-grids flex items-center justify-center ">
          <div className="lg:grid md:grid  grid-cols-4 gap-2">

            <div className="ser-1 lg:border-r md:border-r border-gray-500 ">

              <div className="ser-tt p-6 ">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Web Design <br /> & Development
                </h2>
                <span className="font-NeueRegular text-namiri-yellow ">
                  Brand Expirience
                </span>
              </div>
              <div className="num">
                <h2 className='font-NeueBold text-white  text-center'>
                  1
                </h2>
              </div>

            </div>
            <div className="ser-2 lg:border-r md:border-r border-gray-500">
              
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-xl'>Branding <br /> & Identity Strategies 
                </h2>
                <span className="font-NeueRegular text-namiri-yellow ">
                  Digital Design & Branding
                </span>
              </div>
              <div className="num">
                <h2 className='font-NeueBold text-white   text-center'>
                  2
                </h2>
              </div>

            </div>
            <div className="ser-3 lg:border-r md:border-r border-gray-500">
              
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Graphic <br /> & Design
                </h2>
                <span className="font-NeueRegular text-namiri-yellow ">
                  Digital Design
                </span>
              </div>
              <div className="num">
                <h2 className='font-NeueBold text-white   text-center'>
                  3
                </h2>
              </div>

            </div>
            <div className="ser-4 ">
            <div className="ser-tt p-6">
                <h2 className='font-kaftan text-white md:text-xl text-2xl'>Digital <br /> & Marketing.
                </h2>
                <span className="font-NeueRegular text-namiri-yellow ">
                  Digital Marketing
                </span>
              </div>
              <div className="num">
                <h2 className='font-NeueBold text-white   text-center'>
                 4
                </h2>
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
                {/* <iframe src="https://embed.lottiefiles.com/animation/96848"></iframe> */}
            </div>
          </div>
      </About>
      <Title className="title-text-center">
            <p className="text-center font-Adieu text-white">
                <span className="font-kaftan italic">our</span> Work.
            </p>
        </Title>
      <Work/>
      {/* adding expirince  and figures and facts */}
      <div className="container figs px-5 ">
        <div className="grid l md:grid-cols-3 grid-cols-1 gap-4 p-4">
          <div className="exp p-6">
            <h2 className='font-Adieu text-white md:text-9xl text-7xl text-center'>
              5<span className='font-Adieu'>+</span>
            </h2>
            <p className="text-white font-NeueRegular text-center text-xl px-3">
              Years Of Expirience
            </p>
          </div>

          <div className="customer p-6">
            <h2 className='font-NeueBold text-white md:text-9xl text-7xl text-center'>
              25
            </h2>
            <p className="text-white font-NeueRegular text-center text-xl px-3">
                Regular customers of
                3 years or longer
            </p>
          </div>

          <div className="no-customer p-6">
           <h2 className='font-NeueBold text-white md:text-9xl text-8xl text-center'>
              2 <span className='font-Adieu'>+</span>
            </h2>
            <p className="text-white font-NeueRegular text-center text-xl px-3">
                Awards
            </p>
          </div>
          
        </div>

        <hr className='w-6/6 text-white' align="center" />
      </div>
      <Testimonial/>
      <hr align="center" className='w-5/6 text-white'   />
      <Brands></Brands>
     <Blogs/>
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
           <Link to="/lets-talk">
            <BsArrowRightShort/>
           </Link> 
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