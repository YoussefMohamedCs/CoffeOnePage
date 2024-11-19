import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring'
import "./SectionTwo.scoped.css"
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import Slider from 'react-infinite-logo-slider'


export default function SectionTwo() {
  return (
    <div className='sectionTwo'>
        <div className="container-lg">
        <Slider
            width="310px"
            duration={40}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="https://zcube.in/bruin/img/brand/b-logo1.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://zcube.in/bruin/img/brand/b-logo2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://zcube.in/bruin/img/brand/b-logo3.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://zcube.in/bruin/img/brand/b-logo4.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://zcube.in/bruin/img/brand/b-logo5.png" alt="any3" className='w-36' />
            </Slider.Slide>
           
        </Slider>
                  
                    

   
   
        </div>

    </div>
  )
}
