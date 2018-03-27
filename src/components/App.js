import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { summary } from '../../assets/summary.json'
import ParticipationSection from './ParticipationSection'
import setconLogo from '../img/setcon2016_logo.png'
import setconBigLogo from '../img/setcon2016_biglogo.png'

class App extends Component {
  state = {
    summary
  }
  render() {
    return(
      <div>
        <header className="main-header background-white main-diagonal--bottom-white" id="mobile-menu">
          <div className="main-header__wrapper">
            <div className="main-header__title">
                <a href="" className="main-header__title__logo-link">
                    <img src={setconLogo} alt="SETCON small logo" />
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

        <section className="event-section">
          <div className="event-section__content">
            <img src={setconBigLogo} alt="SETCON Huge logo" className="event-section__content__logo" />
            <div className="event-section__content__text">
                <p>22 Апреля 2018</p>
                <p>г. Брест, ул. Л-та Рябцева, 124</p>
            </div>
          </div>
        </section>

        <section className="participations-section background-dark-red counter-diagonal--top-dark-red">
          <div className="participations-section--wrapper col-1">
            <div className="participations-section__row col-1-2 mob-1">
              {this.state.summary.slice(0, 2).map(item => 
                <ParticipationSection 
                  key={item.id}
                  {...item}
                />
              )}
            </div>
            <div className="participations-section__row col-1-2 mob-1">
            {this.state.summary.slice(2, 4).map(item => 
              <ParticipationSection 
                key={item.id}
                {...item}
              />
            )}
            </div>
          </div>
        </section>

        <section className="conference-description background-white counter-diagonal--top-white main-diagonal--top-white">
          <p className="conference-description__text">Ежегодная профессиональная инженерная конференция, цель которой создать площадку для активного общения и обмена знаниями. Эксперты из разных сфер IT делятся опытом разработки и имплементации программных продуктов и сервисов.</p>
        </section>
        <section className="venue-section background-rose">
          <div className="venue-section__map" >
            <div className="venue-section__map__action" id="map"></div>
          </div>
          <div className="venue-section__description">
            <p className="venue-section__description__item">iBC Бизнес-центр - Intelligent Business Center. </p>
            <p className="venue-section__description__item">Расположен в тихом и живописном месте Бреста, в здании кафе-клуба 11:11, по адресу ул. Л-та Рябцева, 124.</p>
            <p className="venue-section__description__item">Вход со стороны ул. Л-та Рябцева.</p>
          </div>
        </section>
        <section className="start-time-section background-dark-red counter-diagonal--top-dark-red">
          <p className="start-time-section__text">Начало в 11:00</p>
        </section>



      </div>
    )
  }
}

export default App