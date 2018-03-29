import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { summary } from '../../assets/summary.json'
import ParticipationSection from './ParticipationSection'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import setconLogo from '../img/setcon-18_small_logo.png'
import setconBigLogo from '../img/setcon-18_big_logo.png'
import epamLogo from '../img/epam_logo.png'
import myITLogo from '../img/MyIT_logo_Big.png'
import itSharkLogo from '../img/IT_Shark-inversion.png'
import seavus from '../img/SeavusLogo-Color.png'
import smartexLogo from '../img/smartex_logo.svg'

class App extends Component {
  state = {
    summary
  }
  render() {
    return(
      <div>
        <MainHeader currentPage="home" />

        <section className="event-section">
          <div className="event-section__content">
            <img src={setconBigLogo} alt="SETCON Huge logo" className="event-section__content__logo" />
            <div className="event-section__content__text">
                <p>22 Апреля 2018</p>
                <p>г. Брест, ул. Л-та Рябцева, 124</p>
                <p>Начало в 11:00</p>
            </div>
          </div>
        </section>

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

        <section className="participations-section ">
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
            <div className="venue-section__map__action" id="map">
            <iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBcx0KF_DgTCLWOlMOZI59T8IQ1AXPm-AQ&q=Kafe+"Klub+11:11"&zoom=16&maptype=satellite&center=52.144756,23.680140'
                width="100%"
                height="300px"
                frameBorder="0" />
            </div>
          </div>
          <div className="venue-section__description">
            <p className="venue-section__description__item">iBC Бизнес-центр - Intelligent Business Center. </p>
            <p className="venue-section__description__item">Расположен в тихом и живописном месте Бреста, в здании кафе-клуба 11:11, по адресу ул. Л-та Рябцева, 124.</p>
            <p className="venue-section__description__item">Вход со стороны ул. Л-та Рябцева.</p>
          </div>
        </section>
    
        <MainFooter />


      </div>
    )
  }
}

export default App