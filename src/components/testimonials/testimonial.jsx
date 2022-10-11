import React from 'react'
import styled from 'styled-components'
import { Emoji } from '../../assets'
import { BsArrowRightCircle} from "react-icons/bs";
import './tes.css'

const Testimonial = () => {

    const Bg = styled.div`
        height:350px;
        margin-top:-300px;
        margin-left:40px;

        @media (max-width: 600px){
            display:none;
            height:350px;
            margin-top:-300px;
            margin-left:40px;
    
        }
        
        @media only screen ,(min-widht:601px) and (max-width:768px){
            height:350px;
            margin-top:-300px;
            margin-left:40px; 
        }

    `;

  return (
    <div className='p-'>
        <div className="container">
            <div className='p-9 lg:flex items-center justify-between'>
                <div className=''>
                <h3 className='font-kaftan text-white lg:text-4xl text-2xl'>What Our Clients Say</h3>
                </div>

                <div className='inline-flex items-center '>
                    <p className='font-NeueBold text-namiri-yellow lg:text-4xl text-xl hover:text-namiri-sun'>View all </p>
                    <span className="icon text-namiri-yellow lg:text-4xl text-2xl px-2 hover:text-namiri-sun">
                    <BsArrowRightCircle/>
                    </span>
                </div>
                
            </div>
            <div className="lg:grid md:grid grid-cols-2 md:gap-6 gap-2 lg:p-9 md:p-5 p-3 ">
                {/* <div className=''></div> */}
                <div className="tst-cont bg-white rounded lg:p-8 md:p-8 p-4 lg:m-0 my-5 lg:w-5/6 md:w-6/6">
                    <div className="text-start">
                    <div className="tt-top flex items-center justify-between">
                        <div className="nam-tt">
                                <h2 className="name-c font-NeueBold p-1">
                            Dr Richard
                                </h2>
                                <span className='font-NeueRegular'>
                                    Dentist, <br /> Reign Dental Services.
                                </span>
                        </div>
                        <div className="tt-img">
                            <img src={Emoji} alt="" />
                        </div>
                        </div>
                        <p className="testimonial  font-NeueRegular  py-6 px-4 " >
                        Best web designer.I highly recommend.My website was upgraded to my specifications & satisfaction. Not to forget the constant support I get incase i need adjustment on my website.
                        Thanks.
                        </p>
                        <p className='font-kaftan text-end px-3 text-6xl text-namiri-light'>
                            "
                        </p>
                    </div>
                </div>
                <div className="tst-cont bg-white rounded p-8 lg:m-0 my-5 lg:w-5/6">
                    <div className="text-start">
                        <div className="tt-top flex items-center justify-between">
                        <div className="nam-tt">
                                <h2 className="name-c font-NeueBold p-1">
                                Gabriel DuPont
                                </h2>
                                <span className='font-NeueRegular'>
                                    Managing Diirector , <br /> Iyebe Orchards.
                                </span>
                        </div>
                        <div className="tt-img">
                            <img src={Emoji} alt="" />
                        </div>
                        </div>
                        <p className="testimonial font-NeueRegular py-6 px-4 ">
                          A fun Expirience learning , Kikuyu , and also getting my designs done,Quality and Speed ,The best i have ever met.
                          I know my business is in safe hands now. <br />
                          <span className="italics">Bon Travail</span>
                        </p>
                        <p className='font-kaftan text-end px-3 text-6xl text-namiri-light'>
                            "
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Bg className="bg-namiri-l">
        </Bg>
    </div>
  )
}

export default Testimonial