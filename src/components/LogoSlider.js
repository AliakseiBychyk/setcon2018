import React, { Fragment } from 'react'
import epamLogo from '../img/epam_logo.png'
import myITLogo from '../img/MyIT_logo_Big.png'
import itSharkLogo from '../img/IT_Shark-inversion.png'
import seavus from '../img/SeavusLogo-Color.png'
import smartexLogo from '../img/smartex_logo.svg'
import { Carousel } from 'react-responsive-carousel'

const LogoSlider = () => {
  const settings = {
    autoPlay: true,
    showThumbs: false,
    showIndicators: false,
    showStatus: false,
    infiniteLoop: true,
    selectedItem: Math.floor(Math.random() * 6)  
  };
  return (
    <Carousel className="logo-slider" {...settings} >
      <div className="logo-slider__logo-container">
        <a href="https://www.epam.com/" target="_blank">
          <img src={epamLogo} className="logo" /> 
        </a>
      </div>
      <div>
        <a href="https://myit.by/" target="_blank">
          <img src={myITLogo} className="logo" />
        </a>
      </div>
      <div>
        <a href="https://it-shark.pro/" target="_blank">
          <img src={itSharkLogo} className="logo" />
        </a>
      </div>
      <div>
        <a href="https://seavus.com/" target="_blank">
          <img src={seavus} className="logo" />
        </a>
      </div>
      <div>
        <a href="https://smartexlab.com/" target="_blank">
          <img src={smartexLogo} className="logo smartex_logo" />
        </a>
      </div>
    </Carousel>
  )
}

export default LogoSlider