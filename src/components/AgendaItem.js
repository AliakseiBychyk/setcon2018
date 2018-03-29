import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const AgendaItem = ({name_r, subject, description, time, image}) => {
  return (
    <div className="time-table-section">
      <h3>{time}</h3>
      <div className="time-table-section__container">
        <div className="time-table-section__container_inner">
          <span class="time-table-section__event">{subject}</span>
          <div class="time-table-section__event__details__container">
            <div class="time-table-section__event__details">
              <div>
                <div class="time-table-section__event__person">
                  <span class="time-table-section__event__person__avatar">
                    <img src={'../img/'+ image} alt={"avatar for ", name}/>
                  </span>
                  <h2>{name_r}</h2>
                  <div class="time-table-section__event__person__bio">
                    {description}
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