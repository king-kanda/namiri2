import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/newlogo.svg'


const Footer = () => {

    const Footer = styled.footer` 
        
        height: 100vh;

        .footer-logo{
            display: flex;
            align-items:center;
            justify-content:center;
        }

        .mail-text{
            font-size: 50px;
        }

        @media (max-width: 480px){

            height: 100%;

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
    <Footer className='footer bg-namiri-yellow text-namiri-dark'>
        <div className="footer-hold container p-5">
            <div className="footer-logo text-center m-5">
                <img src={Logo} alt="" className='text-center' />
            </div>
            <div className='text-namiri-light my-12'>
                <p className='font-Adieu mail-text text-start text-xl'>    
                    Launch Your Project.
                </p>
                <a href="mailto:hello@namiricreatives.com?subject='hello namiri ! Shall We ? '">
                    <h2 className='font-kaftan mail-text mt-5'>
                        hello@namiricreatives.com
                    </h2>
                </a>
            </div>
            <div className="footer-cols mt-12">
                <div className="lg:grid  grid-cols-3 gap-6">
                    <div className="mail col-span-2">
                        <h1 className='font-NeueRegular  text-xl'>
                        Sign up for the occasional fan mail and get priority  <br/> access to limited edition merch and prints.
                        </h1>
                        <form action="" className=' py-5'>
                            <div className="mail-input lg:flex md:flex justify-start  ">
                                   <div className="fan-name border-b border-white py-2">
                                   <input className='appearance-none bg-transparent border-none  w-32 text-namiri-dark mr-3 py-4 px-2 leading-tight focus:outline-none focus:bg-transparent ' type="text" name="" id="first-name" placeholder='First Name'  />
                                   </div>

                                   <div className=" mx-2 fan-mail border-b border-white py-2">
                                   <input className='appearance-none bg-transparent border-none  w-64 text-namiri-dark mr-3 py-4 px-2 leading-tight focus:outline-none focus:bg-transparent' type="email" name="" id="fan-mail"  placeholder='Email Address'/>
                                   </div>
                                    
                            </div>
                            <button className='font-NeueRegular  bg-namiri-light rounded-full px-7 py-3 my-4 text-white hover:bg-white hover:text-namiri-dark'>
                                Enroll me
                            </button>
                        </form>
                    </div>
                    <div className="footer-connect lg:grid md:grid sm:grid grid-cols-2 gap-4 md:mt-10">
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
    </Footer>
  )
}

export default Footer