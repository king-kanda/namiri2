import React from 'react'
import styled from 'styled-components'
import { FraciahLaw, Iyebe } from '../../assets';

const Work = () => {

    const Display = styled.div`
         
        h1{
          font-size:200px;
          span{
            font-size:250px;
          }

          @media (max-width: 480px){
              font-size:70px;
              span{
                font-size:50px;
              }
          }
          @media (min-width: 481px) and (max-width:1024px){
            font-size:100px;
            span{
              font-size:150px;
            }
          }

          @media 
              (max-device-width: 1280px) 
              and (orientation: landscape)
              and (-webkit-min-device-pixel-ratio: 2) { 
                font-size:100px;
                span{
                  font-size:150px;
                }
            }
        }

        
    `;

    const Item = styled.div`
      
        img{
          height:100vh;

          @media (max-width: 480px){

              height:auto;
          } 
          @media (min-width: 481px) and (max-width:1024px){
            height:auto;
          }

          @media 
            (min-width: 481px) and 
            (max-width:1024px)and 
            (orientation : landscape) {
            height:100%;
          }

          @media 
            (max-device-width: 1280px) 
            and (orientation: landscape)
            and (-webkit-min-device-pixel-ratio: 2) { 
              height:100%;
              
          }
        }
    `;

  return (
    <div className='pwro'>
      <div className="work-container px-6 py-4">
        <Display className="display">
          <h1 className='font-NeueBold text-center text-white py-10' > <span className='font-kaftan italic'>Our </span> WORK</h1>
          <Item className='item-display container flex items-center justify-center' >
            <div className="prt-itm">
              <img src={FraciahLaw} alt="" />
            </div>
          </Item>
          <Item className='item-display container flex items-center justify-center mt-12' >
            <div className="prt-itm">
              <img src={Iyebe} alt="" />
            </div>
          </Item>
          <Item className='item-display container flex items-center justify-center mt-12' >
            <div className="prt-itm">
              <img src={FraciahLaw} alt="" />
            </div>
          </Item>
        </Display>
      </div>
    </div>
  )
}

export default Work