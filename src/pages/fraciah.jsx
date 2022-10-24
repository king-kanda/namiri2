import React , {useEffect} from 'react'
import { Navbar , Footer } from '../components'
import styled from 'styled-components';
import { FraciahDribble, FraciahHeader, FraciahLaw, FraciahMobile } from '../assets';
import { BsArrowRightShort ,BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Fraciah = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })


    const HeroText = styled.h1`
      font-size:100px;
      padding-left:38px;
      padding-right:48px;
      
      @media (max-width: 480px){
        font-size:40px;
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
    height:70vh;

    @media (max-width: 480px){
      height:40vh;
    }

    @media (min-width: 481px) and (max-width:768px){
      height:60vh;
    }

  `;

  const ImageCont = styled.div`
     .imag2{
        height:450px;
        width:auto;
        margin-top:100px;

        @media (max-width: 480px){
            margin-top:50px;
            height:250px;
          }
        
     }

    
  `;

  const Nav = styled.div`
  span.arrow{
    border-radius:50%;
    border:1px solid #FFCC1D;
  }
`;

  
  return (
    <>
         <div className="p-2 mb-5">
            <Navbar/>
        </div>
        {/* body ref design */}
        <div className="main-body container">
            <Hero className="hero lg:px-12 p-6">
                <div className="hero-container">
                    <p className='font-NeueRegular text-white'> Wakili A Quick One !</p>
                    <HeroText className='font-kaftan text-white'>
                    <span className='text-namiri-yellow'> Unique </span> Approach to <br />
                    Law.
                    </HeroText>
                </div>    
            </Hero>
            <div className="intro p-4 lg:flex md:flex  items-center justify-center container">
                <div className="img-container">
                    <img src={FraciahHeader} alt="" />
                </div>
                <div className="cl-det text-white lg:px-10 md:px-8 px-5">
                    <div className="cl-info p-4">
                        <div className="h3 underline font-NeueBold text-2xl py-2">Client</div>
                        <p className='font-NeueRegular'>Frachia law & CO Advocates</p>
                    </div>
                    <div className="cl-del p-4">
                        <div className="h3 underline font-NeueBold text-2xl py-2">Deliverables</div>
                        <p className='font-NeueRegular'>Web Design</p>
                        <p className='font-NeueRegular'>Visual Identity</p>
                    </div>
                    <div className="cl-studii p-4">
                        <div className="h3 underline font-NeueBold text-2xl py-2">Team</div>
                        <p className='font-NeueRegular'>Namiri Creatives - Web Design Team</p>
                       
                    </div>
                </div>
            </div>
            <div className="cl-abt flex items-start justify-center container lg:p-6 md:p-3 p-3 m-2">
                <p className='text-white lg:text-4xl md:text-3xl text-2xl font-NeueRegular lg:w-4/5 md:w-4/5 w-full'>
                Fraciah & CO Advocates is a boutique law firm located in the heart of Nairobi with a team of highly qualified and dynamic professionals who represent the new face of legal practice in tune with today’s legal requirements.
                </p>
            </div>
            <div className="p-6">

            </div>
            <div className="container ambition lg:flex md:flex items-start justify-center p-5">
                <div className="ht p-3">
                    <h2 className='text-namiri-yellow font-NeueBold text-3xl px-7'>
                        The Ambition
                    </h2>
                </div>
                <div className="amb-stt lg:w-3/6 md:w-4/6 w-full ">
                    <p className='text-white lg:text-2xl text-xl font-NeueRegular'>
                    The firm needed a more authentic brand, one that did justice to their talent and passion. And they needed a new high-performance website to help them achieve their goals and connect with clients.
                    </p>
                </div>
            </div>
            {/* add images here */}
            <ImageCont className="image-cont lg:flex md:flex jusfify-between m-5">
                <div className="div p-4">
                    <img className='imag1' src={FraciahHeader} alt="" />
                    <img className='imag1 py-6' src={FraciahMobile} alt="" />
                </div>
                <div className="div p-4">
                    <img className='imag2' src={FraciahLaw} alt="" />
                </div>
            </ImageCont>
            {/*  */}
            <div className="container ambition lg:flex md:flex items-start justify-center p-5">
                <div className="ht p-3">
                    <h2 className='text-namiri-yellow font-NeueBold text-3xl px-7'>
                        The Result..
                    </h2>
                </div>
                <div className="amb-stt lg:w-3/6 md:w-4/6 w-full">
                    <p className='text-white lg:text-2xl text-xl font-NeueRegular'>
                    We created a new brand identity that was more authentic and aligned with the firm’s values. We also created a new website that was more user-friendly and easy to navigate.
                    </p>
                </div>
            </div>
            {/* also add images here */}
            <div className="fimage flex items-center justify-center m-8">
                <img src={FraciahDribble} alt="" />
            </div>
            {/* end */}
        </div>
        {/* wrapper menu */}
        <hr className=' text-white p-4' align="center" />
        <div className="container wrapper-menu">
        <Nav className='p-9 container'>
            <div className="grid grid-cols-2 gap-0">
              <div className="link1 p-5 flex justify-center">
                   <div className="link-container">
                    <h5 className="font-NeueRegular p-2 text-white text-center">
                        PREVIOUS
                      </h5>
                      <h2 className="name-link font-Adieu text-white lg:text-6xl">
                        Reign Dental <br />
                        Services.
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                          <span className='arrow text-namiri-yellow lg:text-6xl  text-5xl '>
                            <Link to="/case/reign-dental">
                              <BsArrowLeftShort />
                            </Link>
                          </span>
                      </div>
                   </div>
              </div>
            
              <div className="link2 p-5 flex justify-center">
                   <div className="link-container">
                    <h5 className="font-NeueRegular p-2 text-white text-center">
                        PREVIOUS
                      </h5>
                      <h2 className="name-link font-Adieu text-white lg:text-6xl">
                        Iyebe <br />
                        Orchards
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                     
                        <span className='arrow text-namiri-yellow lg:text-6xl text-4xl '>
                            <Link to="/case/iyebe">
                                <BsArrowRightShort/>
                            </Link>
                        </span>
                       
                         
                      </div>
                   </div>
              </div>
              
            </div>
           
  
        </Nav>

        </div>
        {/* footer */}
        <Footer/>
    </>
  )
}

export default Fraciah