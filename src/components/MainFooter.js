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
      <div className="main-footer__info background-dark-red counter-diagonal--top-dark-red">
        <span>© 2018. SETCON Brest. | Пишите нам</span>
          <a className="main-footer__info__email" href="mailto:uladzimir_kazakevich@epam.com">uladzimir_kazakevich@epam.com</a>
      </div>
    </footer>
  )
}

export default MainFooter