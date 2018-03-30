import React from 'react'
import setconBigLogo from '../img/setcon-18_big_logo.png'

const EventSection = () => {
  return (
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
  )
}

export default EventSection