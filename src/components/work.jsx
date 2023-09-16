import React from 'react'
import styled from 'styled-components'
import { BlinkLogo, FraciahLaw, Iyebe, ReignD } from '../assets';
import { Link } from 'react-router-dom';

const Work = () => {



  const Portfolio = styled.section`
  padding:40px;

  @media (max-width: 480px){
    padding:12px;

  }
`;

  const Case = styled.div`

  display:flex;
  align-content:center;
  justify-content:center;
  margin-bottom:50px;
  position: relative;


  img{
    height:110vh;
  }

  .work-details-wrapper{

  position: absolute;
  bottom: 20px;
  
  }

  @media (max-width: 480px){
    display:flex;
    align-content:center;
    justify-content:center;
    margin-bottom:10px;

    img{
      height:100%;
    }
  }

  @media (min-width: 481px) and (max-width:768px){
    display:flex;
    align-content:center;
    justify-content:center;
    margin-bottom:10px;

    img{
      height:100%;
    }
  }

  `;
  return (
    <div className=''>

      <div className="work-container px-6 py-4">

        <Portfolio className='contrainer'>
          <Case className='lg:py-6 p-3 lg:mb-4'>
            {/* <div className="cursor"></div> */}
            <Link to="/case/fraciah-law">
              <img src={FraciahLaw} alt="fraciah law mockup" />

              <div className="p-5 text-white font-NeueRegular text-xl work-details-wrapper ">
                <div className="name">
                  <h3>
                    Fraciah & CO.
                  </h3>
                </div>
                <div className="details">
                  <h3>
                    Website .
                  </h3>
                </div>
              </div>
            </Link>
          </Case>
          <Case className='lg:py-6 p-3 lg:mb-4'>
            <Link to="/case/iyebe">
              <img src={Iyebe} alt="fraciah law mockup" />

              <div className="p-5 text-white font-NeueRegular text-xl work-details-wrapper ">
                <div className="name">
                  <h3>
                    Iyebe Orchards
                  </h3>
                </div>
                <div className="details">
                  <h3>
                    Branding.
                  </h3>
                </div>
              </div>
            </Link>
          </Case>
          <Case className='lg:py-6 p-3 lg:mb-4'>
            <Link to="/case/reign-dental">
              <img src={ReignD} alt="fraciah law mockup" />

              <div className="p-5 text-white font-NeueRegular text-xl work-details-wrapper ">
                <div className="name">
                  <h3>
                    Reign Dental Services.
                  </h3>
                </div>
                <div className="details">
                  <h3>
                    Website .
                  </h3>
                </div>
              </div>
            </Link>
          </Case>
          <Case className='lg:py-6 p-3 lg:mb-4'>
            <Link to="/case/blink-llp">
              <img src={BlinkLogo} alt="Blink law mockup" />

              <div className="p-5 text-white font-NeueRegular text-xl work-details-wrapper ">
                <div className="name">
                  <h3>
                    Blink LLP
                  </h3>
                </div>
                <div className="details">
                  <h3>
                    Branding
                  </h3>
                </div>
              </div>
            </Link>
          </Case>
        </Portfolio>
      </div>
    </div>
  )
}

export default Work