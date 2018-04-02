import React from 'react'
import epamLogo from '../img/epam_logo.png'
import myITLogo from '../img/MyIT_logo_Big.png'
import itSharkLogo from '../img/IT_Shark-inversion.png'
import seavus from '../img/SeavusLogo-Color.png'
import smartexLogo from '../img/smartex_logo.svg'
import LogoSlider from './LogoSlider';

const LogosSection = () => {
  return (
    <section className="logos-section">
      <LogoSlider />
      <div className="logos-section__logos">
        
        <a href="https://myit.by/" target="_blank">
          <img src={myITLogo} className="logo" />
        </a>
        <a href="https://www.epam.com/" target="_blank">
          <img src={epamLogo} className="logo" />
        </a>
        <a href="https://it-shark.pro/" target="_blank">
          <img src={itSharkLogo} className="logo" />
        </a>
        <a href="https://seavus.com/" target="_blank">
          <img src={seavus} className="logo" />
        </a>
        <a href="https://smartexlab.com/" target="_blank">
          <img src={smartexLogo} className="logo smartex_logo" />
        </a>
      </div>
    </section>
  )
}

export default LogosSection