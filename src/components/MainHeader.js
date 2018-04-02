import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import setconLogo from '../img/setcon-18_small_logo.png'
import homepageLogo from '../img/home_img.png'
import classnames from 'classnames';

const MainHeader = ({currentPage}) => {
  return (
      <header className="main-header background-white main-diagonal--bottom-white" id="mobile-menu">
      <div className="main-header__wrapper">
        <div className="main-header__title">
          <Link 
            className="main-header__title__logo-link"
            to='/' 
          >
            <img src={setconLogo} alt="SETCON small logo" className="main-header__title__logo-img" />
            <img src={homepageLogo} alt="homepage logo" className="main-header__title__home-img" />
          </Link>
        </div>
        <nav className="menu-list">
            <div className="menu-list__items">
              <Link 
                to='/agenda' 
                className={classnames(['menu-list__item__link', 'menu-list__item'], {
                  'menu-list__item--active': currentPage === 'agenda'
                })}
              >Программа</Link>
              <Link 
                to='/speakers' 
                className={classnames(['menu-list__item__link', 'menu-list__item'], {
                  'menu-list__item--active': currentPage ==='speakers'
                })}
              >Докладчики</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyF0jVMaFz6PN5gFyiYfmpyh63jcxZvS6DurP_33trdQ1PKw/viewform" 
                target="_blank" 
                className="menu-list__item__link menu-list__item"
              >Регистрация</a>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader