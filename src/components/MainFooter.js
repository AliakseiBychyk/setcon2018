import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__sloping-block"></div>
      <div className="main-footer__info background-dark-red">
        <span>© 2018. SETCON Brest. | Пишите нам</span>
          <a className="main-footer__info__email" href="mailto:it.shark.pro@gmail.com">it.shark.pro@gmail.com</a>
      </div>
    </footer>
  )
}

export default MainFooter