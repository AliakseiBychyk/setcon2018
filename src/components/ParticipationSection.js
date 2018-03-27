import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const ParticipationSection = ({number, description}) => {
  return (
    <div className="participations-section__item">
      <p className="participations-section__item__number">{number}</p>
      <p className="participations-section__text">{description}</p>
    </div>
  )
}

export default ParticipationSection