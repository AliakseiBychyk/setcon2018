import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const AgendaItem = ({name_r, subject, description_alt, time, image}) => {
  return (
    <div className="time-table-section">
      <h3>{time}</h3>
      
      <div className="time-table-section__container">
        <div className="time-table-section__container_inner">
          <span className="time-table-section__event">{subject}</span>
          <div className="time-table-section__event__details__container">
            <div className="time-table-section__event__details">
              <div>
                <div className="time-table-section__event__person">
                  <span className="time-table-section__event__person__avatar">
                    <img src={'../img/'+ image} alt={"avatar for ", name}/>
                  </span>
                  <h2>{name_r}</h2>
                  <div className="time-table-section__event__person__bio">
                    {description_alt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default AgendaItem