import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import epamLogo from '../img/epam_logo.png'
import myITLogo from '../img/MyIT_logo_Big.png'
import itSharkLogo from '../img/it_shark_logo.png'
import seavus from '../img/SeavusLogo-Color.png'


const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__sloping-block main-diagonal--bottom-white"></div>
      <div className="main-footer__image">
        <div className="logos">
          <a href="https://www.epam.com/" target="_blank"><img src={epamLogo} className="epam_logo" /></a>
          <a href="https://it-shark.pro/" target="_blank"><img src={itSharkLogo} className="epam_logo" /></a>
          <a href="https://myit.by/" target="_blank"><img src={myITLogo} className="epam_logo" /></a>
          <a href="https://seavus.com/" target="_blank"><img src={seavus} className="seavus_logo" /></a>
        </div>
      </div>
      <div className="main-footer__info background-dark-red counter-diagonal--top-dark-red">
        <span>© 2018. SETCON Brest. | Пишите нам</span>
          <a className="main-footer__info__email" href="mailto:uladzimir_kazakevich@epam.com">uladzimir_kazakevich@epam.com</a>
      </div>
    </footer>
  )
}

export default MainFooter