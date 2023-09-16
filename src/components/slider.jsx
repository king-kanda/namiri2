import React from 'react'

import { useKeenSlider } from "keen-slider/react"
import { Image } from 'cloudinary-react'

import "keen-slider/keen-slider.min.css"
import styles from '../styles/careers.module.scss'

const Slider = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        
        slides: {
          perView: 3,
          spacing: 15,
        },
      })
    

  return (
    <>
        <div ref={sliderRef} className="keen-slider items-center">
            <div className="keen-slider__slide number-slide1">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688771719/namiri/imagehome_qqr0fk.webp" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688771718/namiri/mockup_nauryh.webp" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688771717/namiri/off1_wbnf1u.webp" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688772361/namiri/pexels-bich-tran-669996_elem4d.jpg" />
            </div>
            <div className="keen-slider__slide number-slide5">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688772363/namiri/pexels-rdne-stock-project-7551779_vhoxz6.jpg" />
            </div>
            <div className="keen-slider__slide number-slide6">
                <Image className={` ${styles.Img1} rounded-sm`} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1688772364/namiri/pexels-picjumbocom-196644_hmlxb4.jpg" />
            </div>
        </div>
    </>
  )
}

export default Slider