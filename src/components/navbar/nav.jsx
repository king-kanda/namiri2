import React ,{ useRef}  from 'react'
import './nav.css'
import { Logo ,HI ,Moblogo } from '../../assets';
import { Link } from 'react-router-dom'
import { BsInstagram , BsTwitter, BsBehance ,BsLinkedin ,BsXLg } from "react-icons/bs";




const Navbar = () => {

  const navRef = useRef(null);

  const showNavbar = () => {
      navRef.current.classList.toggle("change")
      console.log('read the goddam documentation')
  }


  return (
    <div className='p-0'>
         <nav className=" ">
          <div className="container px-3 py-3 flex justify-between items-center -z-55">
                <a href="/" className="flex items-center">
                    <img src={Logo} alt="" className='nav-logo'/> 
                </a>
                <div className="name-namiri">
                  <span className='font-NeueRegular text-gray-500'>
                    Digital Design <br></br>
                    Agency
                  </span>
                </div>
                <div className="name-namiri hidden md:block">
                  <span className='font-NeueRegular text-gray-500'>
                    Garage numérique <br></br>
                    Sein , France
                  </span>
                </div>
                <div className="menu-trigger">
                  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden  focus:outline-none focus:ring-0  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={showNavbar}>          
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">

                  <ul className="flex  items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className="wait font-NeueRegular">
                        <Link to="/about-us"> 
                            About Us
                        </Link>
                    </li>
                    <li className="wait font-NeueRegular">
                          <Link to='/our-work'> Our work</Link>
                    </li>
                    <li className="wait font-NeueRegular">
                            <Link to='/our-method'> Our method</Link>
                    </li>
                    <li className="wait font-NeueRegular">
                            <Link to='/our-method'> Blogs </Link>
                    </li>
                    <div className="contact-us flex items-center justify-evenly">
                      <Link to='/lets-talk'>
                          <button className=' flex items-center px-4 py-2 text-white border rounded-full font-NeueRegular'>let's talk<img className='px-2' src={HI} alt="Hi emoji" /> 
                          </button>
                      </Link>
                    </div>
                  </ul>   
                
                </div>
          </div>
          <div  ref={navRef} className=" lg:hidden md:hidden nav-wrapper" id='myNav'>
            
            <div  className="container menu-wrapper change p-4"> 
          
                <div className="wrapper-nav container px-4">
                  <div className="flex items-center justify-between">
                      <a href="/" className="flex items-center">
                        <img src={Moblogo} alt="" className='nav-logo'/> 
                      </a>
                      <div className="close text-white">
                        <button onClick={showNavbar}>
                          <span >
                          <BsXLg/>
                          </span>
                        </button>
                        
                      </div>
                  </div>
                </div>
              
                <div className="menu-cont flex justify-center items-center">
                    <div className="container px-6 py-7 flex items-center justify-center">
                      <div className="main-wrapper">
                      
                        <div className="nav-text flex items-start justiify-evenly" id='slide'>
                            <span className='font-kaftan text-white text-2xl px-3'>01</span>
                            <h3 className='text-white font-NeueBold text-5xl '>
                              <Link to="/about-us">
                              About Us.
                              </Link>
                            </h3>
                        </div>

                        <div className="nav-text flex items-end justiify-evenly" id='slide'>
                            <h3 className='text-white font-NeueBold text-5xl '>
                              <Link to="/our-method">
                                  Method .
                              </Link>
                            </h3>
                            <span className='font-kaftan text-white text-2xl px-3'>02</span>
                        </div>

                        <div className="nav-text flex items-start justiify-evenly" id='slide'>
                            <span className='font-kaftan text-white text-2xl px-3'>03</span>
                            <h3 className='text-white font-NeueBold text-5xl '>
                              <Link to="/our-work">
                                  Our Work.
                              </Link>
                            </h3>
                        </div>

                        <div className="nav-text flex items-end justiify-evenly" id='slide'>
                            <h3 className='text-white font-NeueBold text-5xl '>
                              <Link to="/lets-talk">
                                  Contact .
                              </Link>
                            </h3>
                            <span className='font-kaftan text-white text-2xl px-3'>04</span>
                        </div>
                        
                      </div>
                    </div>
                </div>
                <div className="socials-cont text-white text-2xl">
                  <div className="flex items-center justify-evenly">
                    <div className="instagram">
                        <BsInstagram/>
                    </div>
                    <div className="instagram">
                        <BsTwitter/>
                    </div>
                    <div className="instagram">
                        <BsBehance/>
                    </div>
                    <div className="instagram">
                        <BsLinkedin/>
                    </div>
                  </div>
                </div>
                <div className="say-hello flex px-10  text-white lg:hidden md:hidden">
                    <div className="py-10">
                      <h2 className="font-bold font-NeueRegular underline text-2xl py-3">
                        Say hello !
                      </h2>
                      <ul className='text-xl'>
                        <li>hello@namiricreatives.com</li>
                        <li>0774497927</li>
                      </ul>
                    </div>
                </div>

            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar