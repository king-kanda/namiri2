import React from 'react'
import styled from 'styled-components'
import { M1 ,Reign ,Cycle ,One ,two ,KSM } from '../assets'
import { Image } from 'cloudinary-react'



const Brands = () => {

    const Brands = styled.div`
    .logo{
      display:flex;
      align-items:center;
      justify-content:center;
      // background:red;
      padding:10px
    }
    .logo-img{
      height:40px;
    }
    .logo-ipta{
      height:65px;
    
    }

    img{
      height:40px;
    }
    

    @media (max-width: 480px){
      
    }
  `;


  return (
    <>
      <Brands className='container lg:p-10 md:p-8 p-6'>
        <h3 className='text-white font-NeueBold lg:text-5xl md:text-4xl text-3xl'>Home of <span className='text-namiri-yellow font-kaftan '>Iconic </span> Brands .: </h3>
        <p className='text-namiri-yellow font-NeueRegular text-xl'>Proud of working with .</p>
        <div className="logos py-10">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-4">

            <div className="logo ">
                <Image  className={` logo-img `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689869742/namiri/Layer_2_3_ls6svp.svg" />
            </div>
            <div className="logo ">
                <Image  className={` logo-ipta `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1691962045/namiri/logo_3_fxmage-removebg-preview_dlyphq.png" />
            </div>
            <div className="logo ">
                <Image  className={` logo-ipta `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1691962152/namiri/WhatsApp_Image_2023-01-06_at_2.42.35_PM-removebg-preview_hf7ept.png" />
            </div>
            <div className="logo ">
                <Image  className={` logo-img `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1691962215/namiri/Group-6_klt2do.svg" />
            </div>
            <div className="logo ">
                <Image  className={` logo-ipta `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1691961870/namiri/help-removebg-preview_uae0ag.png" />
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
    </>
  )
}

export default Brands