import React from 'react'
import { Navbar , Footer, Slider } from '../components'
import styles from '../styles/careers.module.scss'
import { Link } from 'react-router-dom'




const Careers = () => {
  return (
    <>
        <div className="p-2 mb-5">
            <Navbar/>
        </div>
        <main>
          <section className="hero container p-14">
            <div className="hero-container">
              <div className="hero-tt">
                <h1 
                className={`font-Adieu text-center text-white  ${styles.h1tt} `}>
                  Live Your
                  <br/> Pontential.
                </h1>
              </div>
              <div className="hero-text flex items-center justify-center mt-6">
                <p className={`font-NeueRegular w-1/2 text-center text-white ${styles.ptt}`}>
                 We're not your average, run-of-the-mill corporation. We do have a ladder at the office, but we only use it to change light bulbs and fix things around.

                We are a dynamic, open bunch and we are as flat as we can be. You know, hierarchy-wise. If that's your jam, too, you've come to the right place.

                </p>
              </div>
              <div className="hero-btn flex items-center justify-center mt-6">
                  <h3 
                  className={` underline underline-offset-8 font-NeueRegular text-namiri-yellow`}>
                    Take me to open positions
                  </h3>
              </div>
            </div>
          </section>
          <section className={`sliders`}>
            <Slider/>
          </section>
          {/* open positions section */}
          <section className="open-positions container p-16">
            <div className="start">
              <div className="start-tt w-1/2">
                <h1 className={`font-NeueBold  text-white ${styles.start} `}>
                  Be who you are, while making the most out of your career.
                </h1>
              </div>
              
            </div>

          </section>
          <section className={` ${styles.careerCont2}`}>
                    <div className={` ${styles.openPositions} mt-4`}>
                            <div className={`grid grid-cols-1 md:grid-cols-6 gap-4`}>
                                <div className={` ${styles.openBlank} col-span-1 `}>
                                    {/* blank slate display:none on mobile */}
                                </div>
                                <div className={` ${styles.openPos} col-span-5 `}>
                                    {/*  */}
                                    <div className={` ${styles.position}`}>
                                        <hr className='my-6 border-white'/>
                                        <span className='rounded-full border border-namiri-yellow text-white px-4 py-2' > 
                                            Remote 
                                        </span>
                                      
                                        <div className={`${styles.positionTt} my-3 flex items-center justify-between`}>
                                            <Link to='/careers/position'>
                                                <h3 className={`${styles.positionTitle}`}>
                                                    Senior Software Engineer
                                                </h3>
                                            </Link>
                                            <button className="bg-transpareny hover:bg-white text-white hover:text-namiri-dark font-bold py-2 px-5  rounded-full border border-white">
                                                Apply Now
                                            </button>
                                        </div>


                                        <span className={` ${styles.positionLoc} my-5`}>
                                           <p>
                                                Full Time
                                            </p>
                                        </span>
                                        <hr className='my-6 border-white'/>
                                    </div>
                                    <div className={` mt-12 ${styles.position}`}>
                                    
                                        <span className='rounded-full border border-namiri-yellow text-white px-4 py-2' > 
                                            Remote 
                                        </span>
                                      
                                        <div className={`${styles.positionTt} my-3 flex items-center justify-between`}>
                                            <Link to='/careers/position'>
                                                <h3 className={`${styles.positionTitle}`}>
                                                   DevOps
                                                </h3>
                                            </Link>
                                            <button className="bg-transpareny hover:bg-white text-white hover:text-namiri-dark font-bold py-2 px-5  rounded-full border border-white">
                                                Apply Now
                                            </button>
                                        </div>


                                        <span className={` ${styles.positionLoc} my-5`}>
                                           <p>
                                                Full Time
                                            </p>
                                        </span>
                                        <hr className='my-6 border-white'/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
        </main>
        {/* footer section */}
        <Footer/>
    </>
  )
}

export default Careers