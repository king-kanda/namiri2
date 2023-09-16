import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Footer = () => {

    const Footer = styled.footer` 
        
        /* height: 90vh; */

        .footer-logo{
            display: flex;
            align-items:center;
            justify-content:center;
        }

        .mail-text{
            font-size: 50px;
        }

        @media (max-width: 480px){

            /* height: 100%; */

            .footer-logo{
                display: flex;
                align-items:center;
                justify-content:center;
            }

            .mail-text{
                font-size: 20px;
            }
        }
        
    `;

    

  return (
    <Footer className='footer bg-namiri-dark text-namiri-dark'>
        <div className="footer-hold container px-32 py-12">
            <div className="footer-logo text-center m-5">
                <img src="3" alt="" className='text-center' />
            </div>
            <div className='text-namiri-yellow my-12'>
                <p className='font-Adieu mail-text text-start text-xl'>    
                    Launch Your Project.
                </p>
                
            </div>
            <div className="footer-cols mt-24">
                <div className="lg:grid  grid-cols-3 items-start justify-around gap-6">
                    <div className="mail col-span-2">
                        <h1 className='font-NeueRegular text-white  text-xl'>
                        Sign up for the occasional fan mail and get priority  <br/> access to limited edition merch and prints.
                        </h1>
                        <form action="" className=' py-5'>
                            <div className="mail-input lg:flex md:flex justify-start  ">
                                   <div className="fan-name border-b border-white py-2">
                                   <input className='appearance-none bg-transparent border-none  w-32 text-white mr-3 py-4 px-2 leading-tight focus:outline-none focus:bg-transparent ' type="text" name="" id="first-name" placeholder='First Name'  />
                                   </div>

                                   <div className=" mx-2 fan-mail border-b border-white py-2">
                                   <input className='appearance-none bg-transparent border-none  w-64 text-white mr-3 py-4 px-2 leading-tight focus:outline-none focus:bg-transparent' type="email" name="" id="fan-mail"  placeholder='Email Address'/>
                                   </div>
                                    
                            </div>
                            <button className='font-NeueRegular  bg-namiri-light rounded-full px-6 py-2 my-7 text-white hover:bg-white hover:text-namiri-dark'>
                                Enroll me
                            </button>
                        </form>
                    </div>
                    <div className="footer-connect text-white lg:grid md:grid sm:grid grid-cols-2 gap-4 ">
                        <div className="social">
                            <h2 className='font-NeueBold underline'>Stay Social</h2>
                            <ul className='p-5 font-NeueRegular'>
                                <li className='underline'>Instagram</li>
                                <li className='underline'>Facebook</li>
                                <li className='underline'>Twitter</li>
                                <li className='underline'>Linkedin</li>
                            </ul>
                        </div>
                        <div className="hello">

                            <h2 className='font-NeueBold underline'>Say hello</h2>
                            <ul className='p-5 font-NeueRegular '>
                                <li className='underline'> <a href="tel:0774497927">0774497927</a> </li>
                                <li className='underline'> <a href="mailto:hello@namiricreatives.com">hello@namiricreatives.com</a> </li>
                                
                            </ul>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="cop container px-32 py-4">
            <div className="md:grid grid-cols-2 items-center justify-between gap-4">
                <div className="copy text-white">
                    <p className='font-NeueRegular'>
                        © 2021 Namiri Creatives. All rights reserved.
                    </p>
                </div>
                <div className="terms text-white">
                    <p className='font-NeueRegular text-namiri-yellow  text-end'>
                        <Link to='/privacy' className='underline'>
                            Privacy Statements
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footer