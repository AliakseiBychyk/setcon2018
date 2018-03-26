import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div>
        <header className="main-header background-white main-diagonal--bottom-white" id="mobile-menu">
          <div className="main-header__wrapper">
            <div className="main-header__title">
                <a href="" className="main-header__title__logo-link">
                    <img src="/img/setcon2016_logo.png" alt="SETCON small logo" />
                </a>
            </div>
            <nav className="menu-list">
                <ul className="menu-list__items">
                    <li className="menu-list__item menu-list__item--active">Agenda</li>
                    <li className="menu-list__item menu-list__item--active">Speakers</li>
                    <li className="menu-list__item menu-list__item--active">
                        <a href="" target="_blank" className="menu-list__item__link">Регистрация</a>
                    </li>
                </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default App