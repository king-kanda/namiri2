import React from 'react'
import styled from 'styled-components'


const Footer = () => {

    const Namiri =styled.h1`
        font-size:60px;

        @media (max-width: 480px){
            font-size:40px;
        }
    `;

  return (
    <div className='footer bg-white'>
        <div className="footer-hold container p-5">
            <div className="footer-logo text-center">
                <Namiri className='font-NeueBold text-namiri-light p-4'>N<span className='font-kaftan text-namiri-sun'>a</span>miri</Namiri>
            </div>
            <div className="footer-cols">
                <div className="lg:grid  grid-cols-2 gap-6">
                    <div className="mail">
                        <h1 className='font-NeueRegular text-2xl'>
                            Sign up for the occasional fan mail <br></br> and newsletter
                        </h1>
                        <form action="" className=' py-5'>
                            <div className="mail-input lg:flex md:flex justify-between  ">
                                   <div className="fan-name border-b border-gray-500 py-2">
                                   <input className='appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ' type="text" name="" id="first-name" placeholder='First Name'  />
                                   </div>

                                   <div className="fan-mail border-b border-gray-500 py-2">
                                   <input className='appearance-none bg-transparent border-none  w-64 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="email" name="" id="fan-mail"  placeholder='Email Address'/>
                                   </div>
                                    
                            </div>
                            <button className='font-NeueRegular bg-namiri-light rounded-full px-6 py-1 my-4 text-white'>
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="footer-connect lg:grid md:grid sm:grid grid-cols-2 gap-4 md:mt-10">
                        <div className="social">
                            <h2 className='font-NeueBold underline'>Stay Social</h2>
                            <ul className='p-5'>
                                <li className='underline'>Instagram</li>
                                <li className='underline'>Facebook</li>
                                <li className='underline'>Twitter</li>
                                <li className='underline'>Linkedin</li>
                            </ul>
                        </div>
                        <div className="hello">

                            <h2 className='font-NeueBold underline'>Say hello</h2>
                            <ul className='p-5'>
                                <li className='underline'> <a href="tel:0774497927">0774497927</a> </li>
                                <li className='underline'> <a href="mailto:hello@namiricreatives.com">hello@namiricreatives.com</a> </li>
                                
                            </ul>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer