import React from 'react'
import epamLogo from '../img/epam_logo.png'
import myITLogo from '../img/MyIT_logo_Big.png'
import itSharkLogo from '../img/IT_Shark-inversion.png'
import seavus from '../img/SeavusLogo-Color.png'
import smartexLogo from '../img/smartex_logo.svg'

const LogosSection = () => {
  return (
    <section className="logos-section">
      <div className="logos">
        <a href="https://www.epam.com/" target="_blank">
          <img src={epamLogo} className="epam_logo" />
        </a>
        <a href="https://it-shark.pro/" target="_blank">
          <img src={itSharkLogo} className="epam_logo" />
        </a>
        <a href="https://myit.by/" target="_blank">
          <img src={myITLogo} className="epam_logo" />
        </a>
        <a href="https://seavus.com/" target="_blank">
          <img src={seavus} className="seavus_logo" />
        </a>
        <a href="https://smartexlab.com/" target="_blank">
          <img src={smartexLogo} className="epam_logo" />
        </a>
      </div>
    </section>
  )
}

export default LogosSection