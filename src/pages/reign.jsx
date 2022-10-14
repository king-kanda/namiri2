import React , {useEffect} from 'react'
import '../App.css'
import { Navbar , Footer } from '../components'
import styled from 'styled-components';
import { FraciahDribble, FraciahHeader, FraciahLaw, FraciahMobile, ReignD } from '../assets';
import { BsArrowRightShort ,BsArrowLeftShort } from "react-icons/bs";


const Reign = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })


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
    height:70vh;

    @media (max-width: 480px){
    //   height:40vh;
    }

    @media (min-width: 481px) and (max-width:768px){
      height:40vh;
    }

  `;

  const ImageCont = styled.div`
     .imag2{
        height:450px;
        width:auto;
        margin-top:100px;
        
     }
  `;

  const Nav = styled.div`
  span.arrow{
    border-radius:50%;
    border:1px solid #FFCC1D;
  }
`;

  
  return (
    <div>
         <div className="p-2 mb-5">
            <Navbar/>
        </div>
        {/* body ref design */}
        <div className="main-body container">
            <Hero className="hero lg:px-12 p-6">
                <div className="hero-container">
                    <p className='font-NeueRegular text-white'> Ooh Say Ahhh !</p>
                    <HeroText className='font-kaftan text-white'>
                    <span className='text-namiri-yellow'> You  </span> Smile they  <br />
                    Smile.
                    </HeroText>
                </div>    
            </Hero>
            <div className="intro p-4 flex items-center justify-center container">
                <div className="img-container">
                    <img src={ReignD} alt="" className='reign-banner'  />
                </div>
                <div className="cl-det text-white px-10">
                    <div className="cl-info p-4">
                        <div className="h3 underline font-NeueBold text-2xl py-2">Client</div>
                        <p className='font-NeueRegular'> Reign Dental Services </p>
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
            <div className="cl-abt flex items-start justify-center container p-6 m-2">
                <p className='text-white text-4xl font-NeueRegular w-4/5'>
                    Every smile has a story , Reign dental services in a full time dental clinic , with a goal to recreate your natural smile so you feel and look like yourself, just refreshed and happy. With a Reigning an outstanding reputation for excellence.

                </p>
            </div>
            <div className="p-6">

            </div>
            <div className="container ambition flex items-start justify-center p-5">
                <div className="ht p-3">
                    <h2 className='text-namiri-yellow font-NeueBold text-3xl px-7'>
                        The Ambition
                    </h2>
                </div>
                <div className="amb-stt w-3/6">
                    <p className='text-white text-2xl font-NeueRegular'>
                    Adipiscing morbi quis dignissim dictum nisl risus justo, ridiculus magna. Suspendisse eget dui velit euismod mauris quis viverra faucibus. Porttitor consectetur cras eu sagittis nibh laoreet senectus in ridiculus. Sapien nunc tempus consequat magna sit.
                    </p>
                </div>
            </div>
            {/* add images here */}
            <ImageCont className="image-cont flex jusfify-between m-5">
                <div className="div p-4">
                    <img className='imag1' src={FraciahHeader} alt="" />
                    <img className='imag1 py-6' src={FraciahMobile} alt="" />
                </div>
                <div className="div p-4">
                    <img className='imag2' src={FraciahLaw} alt="" />
                </div>
            </ImageCont>
            {/*  */}
            <div className="container ambition flex items-start justify-center p-5">
                <div className="ht p-3">
                    <h2 className='text-namiri-yellow font-NeueBold text-3xl px-7'>
                        The Result..
                    </h2>
                </div>
                <div className="amb-stt w-3/6">
                    <p className='text-white text-2xl font-NeueRegular'>
                    Adipiscing morbi quis dignissim dictum nisl risus justo, ridiculus magna. Suspendisse eget dui velit euismod mauris quis viverra faucibus. Porttitor consectetur cras eu sagittis nibh laoreet senectus in ridiculus. Sapien nunc tempus consequat magna sit.
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
                      <h2 className="name-link font-NeueBold italic text-white lg:text-6xl">
                        REIGN DENTAL <br />
                        SERVICES
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                          <span className='arrow text-namiri-yellow lg:text-6xl  text-5xl '>
                              <BsArrowLeftShort />
                          </span>
                      </div>
                   </div>
              </div>
            
              <div className="link2 p-5 flex justify-center">
                   <div className="link-container">
                    <h5 className="font-NeueRegular p-2 text-white text-center">
                        PREVIOUS
                      </h5>
                      <h2 className="name-link font-NeueBold italic text-white lg:text-6xl">
                        REIGN DENTAL <br />
                        SERVICES
                      </h2>
                      <div className="icon p-4 flex items-center justify-center">
                          <span className='arrow text-namiri-yellow lg:text-6xl text-4xl '>
                              <BsArrowRightShort/>
                          </span>
                      </div>
                   </div>
              </div>
              
            </div>
           
  
        </Nav>

        </div>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Reign