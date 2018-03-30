import React from 'react'
import mapOptions from '../../assets/mapOptions.json'

const DescriptionSection = () => {
  const { url, APIkey, place, zoom, maptype, center } = mapOptions
  
  return (
    <div>
      <section className="conference-description background-white counter-diagonal--top-white main-diagonal--top-white">
        <p className="conference-description__text">Ежегодная профессиональная инженерная конференция, цель которой создать площадку для активного общения и обмена знаниями. Эксперты из разных сфер IT делятся опытом разработки и имплементации программных продуктов и сервисов.</p>
      </section>
      <section className="venue-section background-rose">
        <div className="venue-section__map" >
          <div className="venue-section__map__action" id="map">
          <iframe src={`${url}?key=${APIkey}&q=${place}&zoom=${zoom}&maptype=${maptype}&center=${center}`}
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
    </div>
  )
}

export default DescriptionSection